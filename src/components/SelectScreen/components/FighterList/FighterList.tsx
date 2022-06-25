import React from 'react';
import { useSelector } from 'react-redux';
import { FighterListItem } from './components/FighterListItem';
import fighters from 'shared/fightersData';
import { getSelectedFighters } from 'redux/selectors';
import type { IFighter, IFightersSelect } from 'shared/types';
import './FighterList.scss';

export const FighterList: React.FC = () => {
  const selectedFighters: IFightersSelect = useSelector(getSelectedFighters);
  return (
    <ul className="fighters">
      {fighters.map((fighter: IFighter) => (
        <FighterListItem
          key={fighter.id}
          fighter={fighter}
          selected1={fighter.id === selectedFighters.firstFighter}
          selected2={fighter.id === selectedFighters.secondFighter}
        />
      ))}
    </ul>
  );
};
