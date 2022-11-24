import { IGetSessionCellParams } from '../../models';
import { EMPTY, TIMES } from '../constants';
import { getFilledString } from './getFilledString';
import { isMatrixFilledInRange } from './isMatrixFilledInRange';

export function getSessionCellGrid(params: IGetSessionCellParams) {
  const { days, timeIndexes } = params;

  const { matrix } = days;
  let row = 0;

  const { start, end } = timeIndexes;

  while (isMatrixFilledInRange(matrix, row, start, end)) {
    row += 1;
    if (!matrix[row]) {
      matrix[row] = getFilledString(days.order.length * TIMES.length, EMPTY);
    }
  }

  const span = end - start;

  return [row, span];
}
