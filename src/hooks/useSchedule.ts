import { useEffect, useRef, useState } from 'react';
import { useCategoriesIds } from './useCategoriesIds';
import { fetchSessionsByCategoryIds } from '../api';
import { IDays, IScheduleSessionEntry } from '../models';
import { recursiveFetch } from '../utils/recursiveFetch';
import { useOnSuccessCallback } from './useOnSuccessCallback';

export const useSchedule = () => {
  const { ids } = useCategoriesIds();
  const [sessions, setSessions] = useState<IScheduleSessionEntry[]>([]);
  const [rowsNumber, setRowsNumber] = useState(0);
  const days = useRef<IDays>({ daysDictionary: {}, daysOrder: [] });

  const onSuccess = useOnSuccessCallback(days.current, setSessions, setRowsNumber);

  useEffect(() => {
    if (!ids.length) {
      return;
    }
    recursiveFetch(onSuccess, fetchSessionsByCategoryIds, ids, 0).catch((e: unknown) => {
      console.error(e);
    });
  }, [ids, onSuccess]);

  return { sessions, rowsNumber, days: days.current };
};
