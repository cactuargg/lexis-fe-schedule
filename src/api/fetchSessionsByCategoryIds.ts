import { fetchSessionsByCategoryId } from './fetchSessionsByCategoryId';
import axios from 'axios';
import { CategorySession } from '../models';

export function fetchSessionsByCategoryIds(ids: number[]): Promise<CategorySession[]> {
  return axios.all(ids.map(id => fetchSessionsByCategoryId(id))).then(axios.spread((...responses) => {
    return responses.map(response => response.data).flat();
  }));
}