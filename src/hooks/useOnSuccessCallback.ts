import { useCallback } from 'react';

import { ICategorySession } from '../models';
import { IOnSuccessCallbackParams } from '../models/OnSuccessCallbackParams';
import { getSessionsResponsesReducer } from './helpers';

export function useOnSuccessCallback(params: IOnSuccessCallbackParams) {
  return useCallback(
    (response: ICategorySession[]) => {
      const { days, setRowsNumber, setSessions } = params;
      const sessions = response.reduce(getSessionsResponsesReducer(days), []);

      const newRowsNumber = days.order.reduce((acc, key) => {
        const day = days.dictionary[key];
        day.gridRow = acc;
        return acc + day.matrix.length;
      }, 1);

      setRowsNumber(newRowsNumber);
      setSessions((prevState) => [...prevState, ...sessions]);
    },
    [params],
  );
}
