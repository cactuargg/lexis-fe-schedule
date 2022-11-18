import React, { useCallback } from 'react';
import { ICategorySession, IDays, IScheduleSessionEntry } from '../models';
import { formatToAMPM, getDate } from '../utils';
import { TIMES } from './constants';

export function useOnSuccessCallback(
  days: IDays,
  setSessions: React.Dispatch<React.SetStateAction<IScheduleSessionEntry[]>>,
  setRowsNumber: React.Dispatch<React.SetStateAction<number>>,
) {
  return useCallback(
    (response: ICategorySession[]) => {
      const newSessions: IScheduleSessionEntry[] = [];
      response.forEach((session) => {
        const dateStart = new Date(session.start);
        const dateEnd = new Date(session.end);

        const dateStringStart = getDate(dateStart);
        const dateStringEnd = getDate(dateEnd);

        const [timeStart] = formatToAMPM(dateStart);
        const [timeEnd] = formatToAMPM(dateEnd);

        const { daysDictionary } = days;

        if (!daysDictionary[dateStringStart]) {
          const newDay = {
            gridRow: 0,
            name: dateStringStart,
            date: dateStart,
            span: 0,
            matrix: [Array(TIMES.length).fill(0)],
          };
          daysDictionary[dateStringStart] = {
            ...newDay,
          };
          Object.assign(days, { daysOrder: Object.keys(days.daysDictionary).sort() });
        }

        if (!daysDictionary[dateStringEnd]) {
          const newDay = {
            gridRow: 0,
            name: dateStringEnd,
            date: dateEnd,
            span: 0,
            matrix: [Array(TIMES.length).fill(0)],
          };
          daysDictionary[dateStringEnd] = {
            ...newDay,
          };
          Object.assign(days, { daysOrder: Object.keys(days.daysDictionary).sort() });
        }

        const dayIndexStart = days.daysOrder.indexOf(dateStringStart);
        const dayIndexEnd = days.daysOrder.indexOf(dateStringEnd);

        const timeIndexStart = TIMES.indexOf(timeStart);
        const timeIndexEnd = TIMES.indexOf(timeEnd);
        const singleDay = dayIndexStart === dayIndexEnd;

        for (let d = dayIndexStart; d <= dayIndexEnd; d += 1) {
          const day = days.daysDictionary[days.daysOrder[d]];
          const { matrix } = day;

          let start = 0;
          let end = TIMES.length;

          if (d === dayIndexStart) {
            start = timeIndexStart;
          }

          if (d === dayIndexEnd) {
            if (timeIndexEnd === 0) {
              // Don't add session if it ends on 12:00 AM next day
              // eslint-disable-next-line no-continue
              continue;
            }
            end = timeIndexEnd;
          }

          let row = 0;
          while (matrix[row].slice(start, end).some((value) => value === 1)) {
            row += 1;
            if (!matrix[row]) {
              matrix.push(Array<number>(TIMES.length).fill(0));
            }
          }

          // Fill cells with 1
          for (let i = start; i < end; i += 1) {
            matrix[row][i] = 1;
          }

          const span = end - start;

          newSessions.push({
            title: `${session.title}`,
            start: timeStart,
            end: timeEnd,
            gridColumnStart: `${2 + start}`,
            gridColumnEnd: `span ${span}`,
            singleDay,
            get gridRow() {
              return day.gridRow + row + 1;
            },
          });
        }
      });

      const newRowsNumber = days.daysOrder.reduce((acc, key) => {
        const day = days.daysDictionary[key];
        day.gridRow = acc;
        return acc + day.matrix.length;
      }, 1);

      setRowsNumber(newRowsNumber);
      setSessions((prevState) => [...prevState, ...newSessions]);
    },
    [days, setRowsNumber, setSessions],
  );
}
