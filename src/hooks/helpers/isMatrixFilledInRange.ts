import { FILLED } from '../constants';

export function isMatrixFilledInRange(matrix: string[], row: number, start: number, end: number) {
  return matrix[row].substring(start, end).includes(FILLED);
}
