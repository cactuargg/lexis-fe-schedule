export interface IDay {
  gridRow: number;
  span: number;
  name: string;
  date: Date;
  matrix: number[][];
}

export interface IDays {
  daysDictionary: Record<string, IDay>;
  daysOrder: string[];
}
