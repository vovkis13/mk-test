import React from 'react';
import { BONUSES } from 'shared/constants';
import './BonusListItem.scss';

interface BonusListItemProps {
  bonus: number;
}

export const BonusListItem: React.FC<BonusListItemProps> = ({
  bonus,
}: BonusListItemProps) => {
  return (
    <div className="bonus-list-item">
      <img
        className="bonus-img"
        src={`${process.env.PUBLIC_URL}/bonuses/${BONUSES[bonus]}.jpg`}
        alt={BONUSES[bonus]}
      />
    </div>
  );
};
