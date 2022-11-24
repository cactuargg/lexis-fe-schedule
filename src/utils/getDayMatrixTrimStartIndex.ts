import { FILLED, TIMES } from '../hooks/constants';

export function getDayMatrixTrimStartIndex(matrix: string[]) {
  return matrix.reduce((acc, row) => {
    const index = row.indexOf(FILLED);
    if (index === -1) {
      return acc;
    }

    return Math.min(index, acc);
  }, TIMES.length);
}
