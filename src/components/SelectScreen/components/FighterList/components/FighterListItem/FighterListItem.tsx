import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedFighters } from 'redux/selectors';
import type { IFighter, IFightersSelect } from 'shared/types';

interface FighterListItemProps {
  fighter: IFighter;
}

export const FighterListItem: FC<FighterListItemProps> = ({ fighter }) => {
  const { id, name, file } = fighter;
  const selectedFighters: IFightersSelect = useSelector(getSelectedFighters);
  
  const path: string = `${process.env.PUBLIC_URL}/fighters/${file}/icon.webp`;
  const selected: string = `selected${
    (id === selectedFighters.firstFighter && '1') ||
    (id === selectedFighters.secondFighter && '2') ||
    ''
  }`;

  return (
    <li className={`fighters-item  ${selected}`}>
      <img className={'fighters-item-icon'} src={path} alt={name} />
    </li>
  );
};
