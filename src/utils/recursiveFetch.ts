import { ICategorySession } from '../models';

export async function recursiveFetch(
  onSuccess: (response: ICategorySession[]) => void,
  fetchCallback: (ids: number[]) => Promise<ICategorySession[]>,
  ids: number[],
  start: number,
) {
  if (start > ids.length) {
    return;
  }
  try {
    const end = start + 10;
    const response = await fetchCallback(ids.slice(start, end));
    onSuccess(response);
    setTimeout(() => {
      recursiveFetch(onSuccess, fetchCallback, ids, end).catch((e: unknown) => console.error(e));
    }, 1000);
  } catch (e) {
    console.error(e);
  }
}
