import axios from 'axios';

import { ICategorySession } from '../models';
import { API_ROOT_PATH } from './constants';

export function fetchSessionsByCategoryId(id: number) {
  return axios.get<ICategorySession[]>(`${API_ROOT_PATH}/categories/${id}/retrieve/`);
}
