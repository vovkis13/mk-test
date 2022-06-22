import React from "react";
import { getFighterById } from "shared/getFighterById";
import type { PlayerNumber } from "shared/types";

interface VsFighterProps {
  fighterId: number;
  player: PlayerNumber;
}

export const VsFighter = ({ fighterId, player }: VsFighterProps) => {
  const { name, file } = getFighterById(fighterId);

  return (
    <div className="vs-fighters-item">
      <img
        src={`${process.env.PUBLIC_URL}/fighters/${file}/${file}-vs.webp`}
        alt={name}
        className={`vs-fighters-img player${player}`}
      />
    </div>
  );
};
