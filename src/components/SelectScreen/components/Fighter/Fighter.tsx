import React from "react";
import { getFighterById } from "shared/getFighterById";
import type { PlayerNumber } from "shared/types";
import "./Fighter.scss";

interface FighterProps {
  fighterId: number;
  player: PlayerNumber;
  selected: boolean;
}

export const Fighter = (props: FighterProps): JSX.Element => {
  const { fighterId, player, selected } = props;
  const { name, file } = getFighterById(fighterId);
  const fileName = selected ? 'selected.png':'moving.webp';
  const path = `${process.env.PUBLIC_URL}/fighters/${file}/${fileName}`;
  return (
    <div className="selected-fighter">
      <img
        className={`selected-fighter-img player${player}`}
        src={path}
        alt={name}
      />
    </div>
  );
};
