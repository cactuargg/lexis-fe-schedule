import { useCategoriesIds } from './useCategoriesIds';
import { fetchSessionsByCategoryIds } from '../api';
import { useEffect, useState } from 'react';
import { CategorySession } from '../models';

export const useSessions = () => {
  const { ids } = useCategoriesIds();
  const [sessions, setSessions] = useState<CategorySession[]>([]);

  const fetchSessions = async () => {
    try {
      const response = await fetchSessionsByCategoryIds(ids);
      setSessions(response);
    } catch (e: unknown) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!ids.length) {
      return;
    }
    fetchSessions();
  }, [ids]);

  return { sessions };
};