import { formatToDualNumberTime } from './formatToDualNumberTime';

export function getDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${formatToDualNumberTime(month)}/${formatToDualNumberTime(day)}`;
}
