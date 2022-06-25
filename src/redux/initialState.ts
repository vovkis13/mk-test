import { BonusCode } from "shared/types";
import type { State } from "./types";

export const initialState: State = {
  screenNumber: 1,
  selectedFighters: {
    firstFighter: 0,
    secondFighter: 4,
    },
  selectedCounter: 0,
  bonusCode: new Array(6).fill(0) as BonusCode,
  bonusStatus: false,
};
