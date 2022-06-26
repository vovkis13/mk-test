import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Sound } from 'components/Sound';
import sound from 'shared/soundService';
import { getBonusStatus } from 'redux/selectors';
import './BonusScreen.scss';

export const BonusScreen: FC = () => {
  const bonusStatus: boolean = useSelector(getBonusStatus);

  const bonusClass: string = bonusStatus ? 'bonus' : '';
  const inagePath: string = `${process.env.PUBLIC_URL}/mk-logo.png`;

  useEffect(() => {
    if (bonusStatus) sound.play('bonus');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bonus-container">
      <img className={`bonus-logo ${bonusClass}`} src={inagePath} alt="logo" />
      {bonusStatus && <Sound id="bonus" />}
    </div>
  );
};
