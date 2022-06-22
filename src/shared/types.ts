export interface IFighter {
  id: number;
  name: string;
  file: string;
}

export interface IFightersSelect {
  firstFighter: number;
  secondFighter: number;
}

export type PlayerNumber = 1 | 2;
