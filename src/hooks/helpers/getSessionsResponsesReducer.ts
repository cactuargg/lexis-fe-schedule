import { ICategorySession, IDays, IScheduleSessionEntry, IStartEnd } from '../../models';
import { formatToAMPM, getDate } from '../../utils';
import { TIMES } from '../constants';
import { fillMatrices } from './fillMatrices';
import { getSessionCellGrid } from './getSessionCellGrid';
import { updateDays } from './updateDays';

export function getSessionsResponsesReducer(days: IDays, trim: IStartEnd) {
  return (acc: IScheduleSessionEntry[], session: ICategorySession) => {
    const dateStart = new Date(session.start);
    const dateEnd = new Date(session.end);

    const dateStringStart = getDate(dateStart);
    const dateStringEnd = getDate(dateEnd);

    const [timeStart] = formatToAMPM(dateStart);
    const [timeEnd] = formatToAMPM(dateEnd);

    updateDays(days, dateStart, dateStringStart);
    updateDays(days, dateEnd, dateStringEnd);

    const dayIndexStart = days.order.indexOf(dateStringStart);
    const dayIndexEnd = days.order.indexOf(dateStringEnd);

    const timeIndexStart = TIMES.indexOf(timeStart);
    const timeIndexEnd = TIMES.indexOf(timeEnd);
    const isSingleDay =
      dayIndexStart === dayIndexEnd || (dayIndexEnd - dayIndexStart === 1 && timeIndexEnd === 0);

    const day = days.dictionary[days.order[dayIndexStart]];

    const params = {
      days,
      timeIndexes: {
        start: dayIndexStart * TIMES.length + timeIndexStart,
        end: dayIndexEnd * TIMES.length + timeIndexEnd,
      },
    };

    const [row, span] = getSessionCellGrid(params);

    fillMatrices({ ...params, row });

    acc.push({
      title: session.title,
      start: timeStart,
      end: timeEnd,
      get gridColumnStart() {
        return day.timeStart - trim.start + timeIndexStart;
      },
      gridColumnEnd: `span ${span}`,
      isSingleDay,
      gridRow: row + 2,
    });
    return acc;
  };
}
