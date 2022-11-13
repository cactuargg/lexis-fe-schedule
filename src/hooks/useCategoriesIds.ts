import { useEffect, useState } from 'react';
import { fetchCategoriesList } from '../api';
import { flattenCategories } from '../utils';

export const useCategoriesIds = () => {
  const [ids, setIds] = useState<number[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await fetchCategoriesList();
      const flatCategories = flattenCategories(response.data);
      setIds(flatCategories.map(category => category.id));
    } catch (e: unknown) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { ids };
};