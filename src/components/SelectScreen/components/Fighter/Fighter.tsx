import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getSelected, getSelectedFighters } from 'redux/selectors';
import { getFighterById } from 'shared/getFighterById';
import type { IFightersSelect, PlayerNumber } from 'shared/types';
import './Fighter.scss';

interface FighterProps {
  playerNumber: PlayerNumber;
}

export const Fighter: FC<FighterProps> = ({ playerNumber }) => {
  const selectedFighters: IFightersSelect = useSelector(getSelectedFighters);
  const selected: number = useSelector(getSelected);

  const fighterId: number = Object.values(selectedFighters)[playerNumber - 1];
  const { name, file } = getFighterById(fighterId);
  const imagePath: string = `${process.env.PUBLIC_URL}/fighters/${file}/${
    playerNumber === selected || selected === 2
      ? 'selected.png'
      : 'moving.webp'
  }`;

  return (
    <div className="selected-fighter">
      <img
        className={`selected-fighter-img player${playerNumber}`}
        src={imagePath}
        alt={name}
      />
    </div>
  );
};
