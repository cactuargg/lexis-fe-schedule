import { IDay, IDays } from '../../models';
import { TIMES } from '../constants';
import { updateDaysMatrix } from './updateDaysMatrix';
import { updateDaysOrder } from './updateDaysOrder';

export function updateDays(days: IDays, date: Date, dateString: string) {
  const { dictionary } = days;
  if (dictionary[dateString]) {
    return;
  }
  const day: IDay = {
    get timeStart() {
      return TIMES.length * days.order.indexOf(dateString) + 1;
    },
    name: dateString,
    date,
    span: 0,
  };

  Object.assign(days.dictionary, { [dateString]: day });
  updateDaysOrder(days);
  updateDaysMatrix(days, dateString);
}
