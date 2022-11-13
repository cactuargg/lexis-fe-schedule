import axios from 'axios';
import { API_ROOT_PATH } from './constants';

export function fetchSessionsByCategoryId(id: number) {
  return axios.get(`${API_ROOT_PATH}/categories/${id}/retrieve/`);
}