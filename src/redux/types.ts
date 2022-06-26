import type { IFightersSelect } from 'shared/types';

export interface State {
  screenNumber: number;
  selectedFighters: IFightersSelect;
  selected: number;
  bonusCode: number[];
  bonusStatus: boolean;
}

interface InitialAction {
  type: string;
}

export interface SetScreenNumberAction extends SetBonusCodeAction {}

export interface SetFightersAction extends InitialAction {
  payload: IFightersSelect;
}
export interface SetSelectedAction extends InitialAction {}

export interface SetBonusCodeAction extends InitialAction {
  payload: number;
}

export interface SetBonusStatusAction extends InitialAction {}
