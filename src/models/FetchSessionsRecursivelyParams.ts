import { ICategorySession } from './CategorySession';

export interface IFetchSessionsRecursivelyParams {
  onSuccess: (response: ICategorySession[]) => void;
  onFinish: () => void;
  callback: (ids: number[]) => Promise<ICategorySession[]>;
  ids: number[];
  start: number;
}
