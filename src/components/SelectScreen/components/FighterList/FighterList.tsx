import React from "react";
import { FighterListItem } from "./components/FighterListItem";
import fighters from "shared/fightersData";
import type { IFighter, IFightersSelect } from "shared/types";
import "./FighterList.scss";

interface FighterListProps {
  selection: IFightersSelect;
}

export const FighterList = ({ selection }: FighterListProps): JSX.Element => {
  return (
    <ul className="fighters">
      {fighters.map((fighter: IFighter) => (
        <FighterListItem
          key={fighter.id}
          fighter={fighter}
          selected1={fighter.id === selection.firstFighter}
          selected2={fighter.id === selection.secondFighter}
        />
      ))}
    </ul>
  );
};
