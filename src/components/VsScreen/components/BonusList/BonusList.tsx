import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Dispatch } from 'redux';
import { BonusListItem } from './components/BonusListItem';
import { Sound } from 'components/Sound';
import sound from 'shared/soundService';
import { BONUS_CODE_KEYS, BONUS_CODE } from 'shared/constants';
import { setBonusStatus, setBonusCode } from 'redux/actions';
import { getBonusCode } from 'redux/selectors';
import type { SetBonusCodeAction, SetBonusStatusAction } from 'redux/types';
import type { BonusCode } from 'shared/types';
import './BonusList.scss';

export const BonusList: FC = () => {
  const dispatchBonusCode: Dispatch<SetBonusCodeAction> = useDispatch();
  const dispatchBonusStatus: Dispatch<SetBonusStatusAction> = useDispatch();
  const bonusCode: BonusCode = useSelector(getBonusCode);

  const keyDownHandler = ({ code }: KeyboardEvent): void => {
    const bonusCodeIndex: number = BONUS_CODE_KEYS.findIndex(
      key => key === code,
    );
    if (bonusCodeIndex >= 0) {
      sound.play('code');
      dispatchBonusCode(setBonusCode(bonusCodeIndex));
    }
  };

  useEffect(() => {
    if (bonusCode.join('') === BONUS_CODE)
      dispatchBonusStatus(setBonusStatus());
  }, [bonusCode, dispatchBonusStatus]);

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler, false);
    return () => {
      document.removeEventListener('keydown', keyDownHandler, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bonuses">
      <ul className="bonus-list">
        {bonusCode.map((bonus, index) => (
          <BonusListItem key={index} bonus={bonus} />
        ))}
      </ul>
      <Sound id="code" />
    </div>
  );
};
