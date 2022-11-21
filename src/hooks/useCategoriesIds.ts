import { useEffect, useState } from 'react';

import { onError } from '../utils';
import { fetchCategories } from './helpers';

export const useCategoriesIds = () => {
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    fetchCategories(setIds).catch(onError);
  }, []);

  return { ids };
};
