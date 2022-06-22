import fighters from "./fightersData";
import type { IFighter } from "./types";

export const getFighterById = (fighterId: number): IFighter =>
  (fighters as IFighter[]).find(
    (fighter) => fighter.id === fighterId,
  ) as IFighter;
