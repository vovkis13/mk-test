import type { IFightersSelect } from 'shared/types';
import {
  InitialAction,
  SetBonusCodeAction,
  SetFightersAction,
  SetScreenNumberAction,
  SetSelectedCounterAction,
} from './types';

export const SET_SCREEN_NUMBER = 'SET_SCREEN_NUMBER';
export const CHOOSE_FIRST_FIGHTER = 'CHOOSE_FIRST_FIGHTER';
export const CHOOSE_SECOND_FIGHTER = 'CHOOSE_SECOND_FIGHTER';
export const SET_FIGHTERS = 'SET_FIGHTERS';
export const SET_SELECTED_COUNTER = 'SET_SELECTED_COUNTER';
export const SET_BONUS_CODE = 'SET_BONUS_CODE';
export const SET_BONUS_STATUS = 'SET_BONUS_STATUS';

export const setScreenNumber = (
  screenNumber: number,
): SetScreenNumberAction => ({
  type: SET_SCREEN_NUMBER,
  payload: screenNumber,
});

export const setFightersAction = (
  fighters: IFightersSelect,
): SetFightersAction => ({
  type: SET_FIGHTERS,
  payload: fighters,
});

export const setSelectedCounterAction = (): SetSelectedCounterAction => ({
  type: SET_SELECTED_COUNTER,
});

export const setBonusCodeAction = (bonusCode: number): SetBonusCodeAction => ({
  type: SET_BONUS_CODE,
  payload: bonusCode,
});

export const setBonusStatusAction = (): InitialAction => ({
  type: SET_BONUS_STATUS,
});
