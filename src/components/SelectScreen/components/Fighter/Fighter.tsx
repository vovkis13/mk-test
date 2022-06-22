import React from "react";
import { getFighterById } from "shared/getFighterById";
import type { PlayerNumber } from "shared/types";
import "./Fighter.scss";

interface FighterProps {
  fighterId: number;
  player: PlayerNumber;
}

export const Fighter = ({ fighterId, player }: FighterProps): JSX.Element => {
  const { name, file } = getFighterById(fighterId);
  return (
    <div className="selected-fighter">
      <img
        className={`selected-fighter-img player${player}`}
        src={`${process.env.PUBLIC_URL}/fighters/${file}/${file}.webp`}
        alt={name}
      />
    </div>
  );
};
