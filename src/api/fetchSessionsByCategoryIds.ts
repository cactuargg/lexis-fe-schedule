import axios from 'axios';
import { fetchSessionsByCategoryId } from './fetchSessionsByCategoryId';
import { ICategorySession } from '../models';

export function fetchSessionsByCategoryIds(ids: number[]): Promise<ICategorySession[]> {
  return axios
    .all(ids.map((id) => fetchSessionsByCategoryId(id)))
    .then(axios.spread((...responses) => responses.map((response) => response.data).flat()));
}
