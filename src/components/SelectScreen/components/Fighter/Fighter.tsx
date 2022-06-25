import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCounter, getSelectedFighters } from 'redux/selectors';
import { getFighterById } from 'shared/getFighterById';
import type { IFightersSelect, PlayerNumber } from 'shared/types';
import './Fighter.scss';

interface FighterProps {
  player: PlayerNumber;
}

export const Fighter: React.FC<FighterProps> = ({ player }: FighterProps) => {
  const selectedFighters: IFightersSelect = useSelector(getSelectedFighters);
  const fighterId = Object.values(selectedFighters)[player - 1];
  const { name, file } = getFighterById(fighterId);
  const selectedCounter: number = useSelector(getSelectedCounter);
  const selected = player === selectedCounter || selectedCounter === 2;
  const fileName = selected ? 'selected.png' : 'moving.webp';
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
