import type { IFightersSelect } from "./types";

export const FIGHTERS_NUMBER = 15;
export const FIRST_SCREEN_DELAY = 2000;
export const SECOND_SCREEN_DELAY = 4000;
export const FIGHTERS_MOVING_TIME = 1000;
export const BONUS_CODE = '210012';

export const BONUS_CODE_KEYS = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY'];

export const BONUSES = [
  'dragon',
  'logo',
  'jingjang',
  'mk3',
  'question',
  'lightning',
  'goro',
  'raiden',
  'kahn',
  'skull',
];

export const INITIAL_FIGHTERS: IFightersSelect = {
  firstFighter: 0,
  secondFighter: 4,
};

