import axios from 'axios';
import { API_ROOT_PATH } from './constants';
import { CategoryWithSubcategories } from '../models';

export async function fetchCategoriesList() {
  return axios.get<CategoryWithSubcategories[]>(`${API_ROOT_PATH}/categories/list`);
}