import React from "react";
import { getFighterById } from "shared/getFighterById";
import { IFightersSelect } from "shared/types";
import "./FighterNames.scss";

interface FighterNamesProps {
  fighters: IFightersSelect;
  selected: number;
}

export const FighterNames = (props: FighterNamesProps): JSX.Element => {
  const { fighters, selected } = props;
  return (
    <div className="select-fighternames">
      <span className={`select-fightername ${selected ? "player1" : ""}`}>
        {getFighterById(fighters.firstFighter).name}
      </span>
      <span>
        <img src={`${process.env.PUBLIC_URL}/vs.png`} alt="versus" />
      </span>
      <span className={`select-fightername ${selected === 2 ? "player2" : ""}`}>
        {getFighterById(fighters.secondFighter).name}
      </span>
    </div>
  );
};
