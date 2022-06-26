import actionTypes from './actionTypes';
import type { IFightersSelect } from 'shared/types';
import type {
  SetScreenNumberAction,
  SetFightersAction,
  SetSelectedAction,
  SetBonusCodeAction,
  SetBonusStatusAction,
} from './types';

export const setScreenNumber = (
  screenNumber: number,
): SetScreenNumberAction => ({
  type: actionTypes.SET_SCREEN_NUMBER,
  payload: screenNumber,
});

export const setFighters = (fighters: IFightersSelect): SetFightersAction => ({
  type: actionTypes.SET_FIGHTERS,
  payload: fighters,
});

export const setSelected = (): SetSelectedAction => ({
  type: actionTypes.SET_SELECTED,
});

export const setBonusCode = (bonusCode: number): SetBonusCodeAction => ({
  type: actionTypes.SET_BONUS_CODE,
  payload: bonusCode,
});

export const setBonusStatus = (): SetBonusStatusAction => ({
  type: actionTypes.SET_BONUS_STATUS,
});
