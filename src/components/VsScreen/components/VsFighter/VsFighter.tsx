import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedFighters } from 'redux/selectors';
import { getFighterById } from 'shared/getFighterById';
import type { IFightersSelect, PlayerNumber } from 'shared/types';

interface VsFighterProps {
  player: PlayerNumber;
}

export const VsFighter: FC<VsFighterProps> = ({ player }) => {
  const selectedFighters: IFightersSelect = useSelector(getSelectedFighters);

  const fighterId: number = Object.values(selectedFighters)[player - 1];
  const { name, file } = getFighterById(fighterId);
  const path: string = `${process.env.PUBLIC_URL}/fighters/${file}/versus.png`;
  return (
    <div className="vs-fighters-item">
      <img
        className={`vs-fighters-img player${player}`}
        src={path}
        alt={name}
      />
    </div>
  );
};
