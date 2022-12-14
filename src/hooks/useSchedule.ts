import { useEffect, useMemo, useRef, useState } from 'react';

import { fetchSessionsByCategoryIds } from '../api';
import { IDays, IScheduleSessionEntry } from '../models';
import { onError } from '../utils';
import { DAY_MATRIX_INITIAL_STRING } from './constants';
import { useCategoriesIds } from './useCategoriesIds';
import { useLoadingState } from './useLoadingState';
import { useOnSuccessCallback } from './useOnSuccessCallback';

export const useSchedule = () => {
  const { ids } = useCategoriesIds();
  const [sessions, setSessions] = useState<IScheduleSessionEntry[]>([]);
  const [rowsNumber, setRowsNumber] = useState(0);

  const days = useRef<IDays>({ dictionary: {}, order: [], matrix: [DAY_MATRIX_INITIAL_STRING] });
  const trim = useRef({ start: 0, end: 0 });

  const params = useMemo(
    () => ({
      days: days.current,
      setSessions,
      setRowsNumber,
      trim: trim.current,
    }),
    [],
  );
  const onSuccess = useOnSuccessCallback(params);
  const { isLoaded, finishFetchCallback } = useLoadingState();

  useEffect(() => {
    if (!ids.length) {
      return;
    }
    let i = 0;

    while (i < ids.length) {
      const start = i;

      let end = start + 10;
      end = end > ids.length ? ids.length : end;

      const delay = (1000 * end) / ids.length;

      setTimeout(() => {
        fetchSessionsByCategoryIds(ids.slice(start, end))
          .then((response) => {
            onSuccess(response);
            if (end === ids.length) {
              finishFetchCallback();
            }
          })
          .catch(onError);
      }, delay);

      i = end;
    }
  }, [finishFetchCallback, ids, onSuccess]);

  return {
    sessions,
    rowsNumber,
    days: days.current,
    isLoaded,
    trim: trim.current,
  };
};
