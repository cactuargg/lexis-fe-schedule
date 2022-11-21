import axios from 'axios';

import { ICategorySession } from '../models';
import { fetchSessionsByCategoryId } from './fetchSessionsByCategoryId';

export function fetchSessionsByCategoryIds(ids: number[]): Promise<ICategorySession[]> {
  return axios
    .all(ids.map((id) => fetchSessionsByCategoryId(id)))
    .then(axios.spread((...responses) => responses.map((response) => response.data).flat()));
}
