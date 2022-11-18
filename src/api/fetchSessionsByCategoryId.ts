import axios from 'axios';
import { API_ROOT_PATH } from './constants';
import { ICategorySession } from '../models';

export function fetchSessionsByCategoryId(id: number) {
  return axios.get<ICategorySession[]>(`${API_ROOT_PATH}/categories/${id}/retrieve/`);
}
