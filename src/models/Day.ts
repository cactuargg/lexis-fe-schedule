export interface IDay {
  timeStart: number;
  span: number;
  name: string;
  date: Date;
}

export type IDaysDictionary = Record<string, IDay>;

export interface IDays {
  dictionary: IDaysDictionary;
  order: string[];
  matrix: string[];
}
