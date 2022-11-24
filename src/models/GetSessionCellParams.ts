import { IDays } from './Day';
import { IStartEnd } from './StartEnd';

export interface IGetSessionCellParams {
  days: IDays;
  timeIndexes: IStartEnd;
}
