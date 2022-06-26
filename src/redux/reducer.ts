import { AnyAction } from '@reduxjs/toolkit';
import { incrementValueByIndex } from 'shared/incrementValueByIndex';
import { initialState } from './initialState';
import actionType from './actionTypes';
import type { BonusCode } from 'shared/types';
import type { State } from './types';

export const reducer = (state = initialState, action: AnyAction): State => {
  const changeBonusCode = (index: number): BonusCode =>
    incrementValueByIndex(state.bonusCode as BonusCode, index);

  switch (action.type) {
    case actionType.SET_SCREEN_NUMBER:
      return { ...state, screenNumber: action.payload };
    case actionType.SET_FIGHTERS:
      return { ...state, selectedFighters: action.payload };
    case actionType.SET_SELECTED:
      return { ...state, selected: state.selected + 1 };
    case actionType.SET_BONUS_CODE:
      return { ...state, bonusCode: changeBonusCode(action.payload) };
    case actionType.SET_BONUS_STATUS:
      return { ...state, bonusStatus: true };
    default:
      return state;
  }
};
