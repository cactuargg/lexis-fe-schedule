import { FILLED, TIMES } from '../hooks/constants';

export function getDayMatrixTrimEndIndex(matrix: string[]) {
  return matrix.reduce((acc, row) => {
    const index = row.lastIndexOf(FILLED);
    if (index === -1) {
      return acc;
    }

    return Math.max(index, acc);
  }, TIMES.length);
}
