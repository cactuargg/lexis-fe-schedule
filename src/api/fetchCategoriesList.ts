import axios from 'axios';
import { ICategoryWithSubcategories } from '../models';
import { API_ROOT_PATH } from './constants';

export async function fetchCategoriesList() {
  return axios.get<ICategoryWithSubcategories[]>(`${API_ROOT_PATH}/categories/list`);
}
