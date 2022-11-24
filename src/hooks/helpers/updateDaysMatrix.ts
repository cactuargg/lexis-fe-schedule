import { IDays } from '../../models';
import { addStringAt } from '../../utils';
import { DAY_MATRIX_INITIAL_STRING, TIMES } from '../constants';

export function updateDaysMatrix(days: IDays, date: string) {
  if (days.order.length === 1) {
    return;
  }
  const { matrix, order } = days;
  const index = order.indexOf(date);

  matrix.forEach((value, row) => {
    matrix[row] = addStringAt(matrix[row], index * TIMES.length, DAY_MATRIX_INITIAL_STRING);
  });
}
