import React, { FC } from 'react';
import { FighterListItem } from './components/FighterListItem';
import fighters from 'shared/fightersData';
import type { IFighter } from 'shared/types';
import './FighterList.scss';

export const FighterList: FC = () => (
  <ul className="fighters">
    {fighters.map((fighter: IFighter) => (
      <FighterListItem key={fighter.id} fighter={fighter} />
    ))}
  </ul>
);
