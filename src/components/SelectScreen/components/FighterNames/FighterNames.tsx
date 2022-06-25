import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCounter, getSelectedFighters } from 'redux/selectors';
import { getFighterById } from 'shared/getFighterById';
import { IFightersSelect } from 'shared/types';
import './FighterNames.scss';

export const FighterNames: React.FC = () => {
  const selectedFighters: IFightersSelect = useSelector(getSelectedFighters);
  const selectedCounter: number = useSelector(getSelectedCounter);
  return (
    <div className="select-fighternames">
      <span
        className={`select-fightername ${selectedCounter ? 'player1' : ''}`}
      >
        {getFighterById(selectedFighters.firstFighter).name}
      </span>
      <span>
        <img src={`${process.env.PUBLIC_URL}/vs.png`} alt="versus" />
      </span>
      <span
        className={`select-fightername ${
          selectedCounter === 2 ? 'player2' : ''
        }`}
      >
        {getFighterById(selectedFighters.secondFighter).name}
      </span>
    </div>
  );
};
