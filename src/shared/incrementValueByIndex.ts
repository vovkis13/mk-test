import type { BonusCode } from "./types";

export const incrementValueByIndex = (array: BonusCode, index: number) =>
  [
    ...array.slice(0, index),
    (array[index] + 1) % 10,
    ...array.slice(index + 1),
  ] as BonusCode;
