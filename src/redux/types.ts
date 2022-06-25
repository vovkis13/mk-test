import type { IFightersSelect, PlayerNumber } from 'shared/types';

export interface State {
  screenNumber: number;
  selectedFighters: IFightersSelect;
  selectedCounter: number;
  bonusCode: number[];
  bonusStatus: boolean;
}

export interface InitialAction {
  type: string;
}

export interface SetFightersAction extends InitialAction {
  payload: IFightersSelect;
}

export interface SetBonusCodeAction extends InitialAction {
  payload: number;
}

export interface SetSelectedCounterAction extends InitialAction {}
export interface SetScreenNumberAction extends SetBonusCodeAction {}
