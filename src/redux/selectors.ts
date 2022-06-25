import type { BonusCode, IFightersSelect } from 'shared/types';
import type { State } from './types';

export const getScreenNumber = (state: State): number => state.screenNumber;

export const getSelectedFighters = (state: State): IFightersSelect =>
  state.selectedFighters;

export const getSelectedCounter = (state: State): number =>
  state.selectedCounter;

export const getBonusCode = (state: State): BonusCode =>
  state.bonusCode as BonusCode;

export const getBonusStatus = (state: State): boolean => state.bonusStatus;
