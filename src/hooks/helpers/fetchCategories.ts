import React from 'react';

import { fetchCategoriesList } from '../../api';
import { flattenCategories, onError } from '../../utils';

export const fetchCategories = async (
  setIds: React.Dispatch<React.SetStateAction<number[]>>,
): Promise<void> => {
  try {
    const response = await fetchCategoriesList();
    const flatCategories = flattenCategories(response.data);
    setIds(flatCategories.map((category) => category.id));
  } catch (e) {
    onError(e);
  }
};
