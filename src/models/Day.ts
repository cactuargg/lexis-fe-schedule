export interface IDay {
  gridRow: number;
  span: number;
  name: string;
  date: Date;
  matrix: number[][];
}

export type IDaysDictionary = Record<string, IDay>;

export interface IDays {
  dictionary: IDaysDictionary;
  order: string[];
}
