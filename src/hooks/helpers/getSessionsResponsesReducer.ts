import { ICategorySession, IDays, IScheduleSessionEntry } from '../../models';
import { formatToAMPM, getDate } from '../../utils';
import { TIMES } from '../constants';
import { updateDaysDictionary } from './updateDaysDictionary';

export function getSessionsResponsesReducer(days: IDays) {
  return (acc: IScheduleSessionEntry[], session: ICategorySession) => {
    const dateStart = new Date(session.start);
    const dateEnd = new Date(session.end);

    const dateStringStart = getDate(dateStart);
    const dateStringEnd = getDate(dateEnd);

    const [timeStart] = formatToAMPM(dateStart);
    const [timeEnd] = formatToAMPM(dateEnd);

    updateDaysDictionary(days, dateStart, dateStringStart);
    updateDaysDictionary(days, dateEnd, dateStringEnd);

    const dayIndexStart = days.order.indexOf(dateStringStart);
    const dayIndexEnd = days.order.indexOf(dateStringEnd);

    const timeIndexStart = TIMES.indexOf(timeStart);
    const timeIndexEnd = TIMES.indexOf(timeEnd);
    const isSingleDay = dayIndexStart === dayIndexEnd;

    for (let d = dayIndexStart; d <= dayIndexEnd; d += 1) {
      const day = days.dictionary[days.order[d]];
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

      acc.push({
        title: `${session.title}`,
        start: timeStart,
        end: timeEnd,
        gridColumnStart: `${2 + start}`,
        gridColumnEnd: `span ${span}`,
        isSingleDay,
        get gridRow() {
          return day.gridRow + row + 1;
        },
      });
    }
    return acc;
  };
}
