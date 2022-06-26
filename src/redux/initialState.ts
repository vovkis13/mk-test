import { INITIAL_FIGHTERS } from "shared/constants";
import { BonusCode } from "shared/types";
import type { State } from "./types";

export const initialState: State = {
  screenNumber: 1,
  selectedFighters: INITIAL_FIGHTERS,
  selected: 0,
  bonusCode: new Array(6).fill(0) as BonusCode,
  bonusStatus: false,
};
