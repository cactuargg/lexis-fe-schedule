import { IDays } from '../../models';

export function updateDaysOrder(days: IDays) {
  Object.assign(days, { order: Object.keys(days.dictionary).sort() });
}
