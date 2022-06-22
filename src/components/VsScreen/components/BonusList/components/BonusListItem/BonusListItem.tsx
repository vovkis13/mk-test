import React from "react";
import { BONUSES } from "shared/constants";
import './BonusListItem.scss';

interface BonusListItemProps {
  bonus: number;
}

export const BonusListItem = ({ bonus }: BonusListItemProps) => {
  return (
    <div className='bonus-list-item'>
      <img
        className="bonus-img"
        src={`/bonuses/${BONUSES[bonus]}.jpg`}
        alt={BONUSES[bonus]}
      />
    </div>
  );
};
