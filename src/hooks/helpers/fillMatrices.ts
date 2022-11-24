import { IFillMatricesParams } from '../../models';
import { replaceStringAt } from '../../utils';
import { FILLED } from '../constants';

export function fillMatrices(params: IFillMatricesParams) {
  const {
    days: { matrix },
    timeIndexes: { start, end },
    row,
  } = params;

  const fill = String.prototype.padStart(end - start, FILLED);

  matrix[row] = replaceStringAt(matrix[row], start, fill);
}
