import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getSelected, getSelectedFighters } from 'redux/selectors';
import { getFighterById } from 'shared/getFighterById';
import { IFightersSelect } from 'shared/types';
import './FighterNames.scss';

export const FighterNames: FC = () => {
  const selectedFighters: IFightersSelect = useSelector(getSelectedFighters);
  const selected: number = useSelector(getSelected);

  const fighter1: string = getFighterById(selectedFighters.firstFighter).name;
  const fighter2: string = getFighterById(selectedFighters.secondFighter).name;
  const player1Class: string = `player${(selected > 0 && '1') || ''}`;
  const player2Class: string = `player${(selected === 2 && '2') || ''}`;
  const vsPath: string = `${process.env.PUBLIC_URL}/vs.png`;

  return (
    <div className="select-fighternames">
      <span className={`select-fightername ${player1Class}`}>{fighter1}</span>
      <img src={vsPath} alt="versus" />
      <span className={`select-fightername ${player2Class}`}>{fighter2}</span>
    </div>
  );
};
