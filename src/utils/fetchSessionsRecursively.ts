import { IFetchSessionsRecursivelyParams } from '../models';
import { onError } from './onError';

export async function fetchSessionsRecursively(params: IFetchSessionsRecursivelyParams) {
  const { start, ids, callback, onSuccess, onFinish } = params;
  if (start > ids.length) {
    onFinish();
    return;
  }
  if (start > ids.length) {
    return;
  }
  const end = start + Math.min(ids.length - start, 10);
  const newParams = {
    ...params,
    ids,
    start: end,
  };
  try {
    const response = await callback(ids.slice(start, end));
    onSuccess(response);
    setTimeout(() => {
      fetchSessionsRecursively(newParams).catch(onError);
    }, 1000);
  } catch (e) {
    onError(e);
  }
}

//
