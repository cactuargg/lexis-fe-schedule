import { IDays } from '../../models';
import { TIMES } from '../constants';
import { updateDaysOrder } from './updateDaysOrder';

export function updateDaysDictionary(days: IDays, date: Date, dateString: string) {
  const { dictionary } = days;
  if (dictionary[dateString]) {
    return;
  }
  const day = {
    gridRow: 0,
    name: dateString,
    date,
    span: 0,
    matrix: [Array(TIMES.length).fill(0)],
  };

  Object.assign(days.dictionary, { [dateString]: day });
  updateDaysOrder(days);
}
