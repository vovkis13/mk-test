import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Dispatch } from 'redux';
import { FighterList } from './components/FighterList';
import { Fighter } from './components/Fighter';
import { FighterNames } from './components/FighterNames';
import { Sound } from '../Sound';
import sound from 'shared/soundService';
import { FIGHTERS_NUMBER, FIRST_SCREEN_DELAY } from 'shared/constants';
import {
  setFightersAction,
  setScreenNumber,
  setSelectedCounterAction,
} from 'redux/actions';
import type {
  SetFightersAction,
  SetScreenNumberAction,
  SetSelectedCounterAction,
} from 'redux/types';
import type { IFightersSelect } from 'shared/types';
import './SelectScreen.scss';
import { getSelectedCounter } from 'redux/selectors';

const initialFighters: IFightersSelect = {
  firstFighter: 0,
  secondFighter: 4,
};

export const SelectScreen: React.FC = () => {
  const dispatchScreenNumber: Dispatch<SetScreenNumberAction> = useDispatch();
  const dispatchSelectedCounter: Dispatch<SetSelectedCounterAction> =
    useDispatch();
  const dispatchSelectedFighters: Dispatch<SetFightersAction> = useDispatch();
  const selectedCounter = useSelector(getSelectedCounter);
  const [pressedKeys, setPressedKeys] = useState<number>(0);
  const [choosingFighters, setChoosingFighters] =
    useState<IFightersSelect>(initialFighters);

  const arrowKeyDownHandler = (code: string): void => {
    sound.play('choosing');
    const dir: number = code === 'ArrowRight' || code === 'ArrowDown' ? 1 : -1;
    const step: number = code === 'ArrowRight' || code === 'ArrowLeft' ? 1 : 5;
    setChoosingFighters(prev => ({
      ...prev,
      [Object.keys(prev)[selectedCounter]]:
        (Object.values(prev)[selectedCounter] + FIGHTERS_NUMBER + dir * step) %
        FIGHTERS_NUMBER,
    }));
  };

  const keyDownHandler = ({ code }: KeyboardEvent): void => {
    setPressedKeys(counter => counter + 1);
    if (code.includes('Arrow')) arrowKeyDownHandler(code);
    else if (code === 'Enter')
      dispatchSelectedCounter(setSelectedCounterAction());
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler, false);
    sound.play(`selected${selectedCounter}`);
    if (selectedCounter === 2) {
      setTimeout(() => {
        dispatchScreenNumber(setScreenNumber(2));
      }, FIRST_SCREEN_DELAY);
    }
    return () => {
      document.removeEventListener('keydown', keyDownHandler, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCounter]);

  useEffect(() => {
    if (pressedKeys === 1) sound.play('select');
  }, [pressedKeys]);

  useEffect(() => {
    dispatchSelectedFighters(setFightersAction(choosingFighters));
  }, [choosingFighters]);

  return (
    <div className="select-container">
      <h1 className="select-title">select your fighter</h1>
      <FighterList />
      <div className="select-fighters">
        <Fighter player={1} />
        <Fighter player={2} />
      </div>
      <FighterNames />

      <Sound id="select" />
      <Sound id="choosing" />
      <Sound id="selected1" />
      <Sound id="selected2" />
    </div>
  );
};
