import { AnyAction } from '@reduxjs/toolkit';
import { incrementValueByIndex } from 'shared/incrementValueByIndex';
import { BonusCode } from 'shared/types';
import {
  SET_SCREEN_NUMBER,
  SET_FIGHTERS,
  SET_SELECTED_COUNTER,
  SET_BONUS_STATUS,
  SET_BONUS_CODE,
} from './actions';
import { initialState } from './initialState';
import type { State } from './types';

export const reducer = (
  state = initialState,
  { type, payload }: AnyAction,
): State => {
  switch (type) {
    case SET_SCREEN_NUMBER:
      return { ...state, screenNumber: payload };
    case SET_FIGHTERS:
      return { ...state, selectedFighters: payload };
    case SET_SELECTED_COUNTER:
      return { ...state, selectedCounter: state.selectedCounter + 1 };
    case SET_BONUS_CODE:
      return {
        ...state,
        bonusCode: incrementValueByIndex(state.bonusCode as BonusCode, payload),
      };
    case SET_BONUS_STATUS:
      return { ...state, bonusStatus: true };
    default:
      return state;
  }
};
