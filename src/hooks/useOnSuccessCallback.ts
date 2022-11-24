import { useCallback } from 'react';

import { ICategorySession, IOnSuccessCallbackParams, IStartEnd } from '../models';
import { getDayMatrixTrimEndIndex, getDayMatrixTrimStartIndex } from '../utils';
import { getSessionsResponsesReducer } from './helpers';

export function useOnSuccessCallback(params: IOnSuccessCallbackParams) {
  return useCallback(
    (response: ICategorySession[]) => {
      const { days, setRowsNumber, setSessions, trim } = params;
      const sessions = response.reduce(getSessionsResponsesReducer(days, trim), []);
      const { matrix } = days;

      const newTrim: IStartEnd = {
        start: getDayMatrixTrimStartIndex(days.matrix),
        end: getDayMatrixTrimEndIndex(days.matrix) + 1,
      };

      Object.assign(trim, newTrim);
      setRowsNumber(matrix.length);
      setSessions((prevState) => [...prevState, ...sessions]);
    },
    [params],
  );
}
