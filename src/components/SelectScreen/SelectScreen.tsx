import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Dispatch } from 'redux';
import { FighterList } from './components/FighterList';
import { Fighter } from './components/Fighter';
import { FighterNames } from './components/FighterNames';
import { Sound } from '../Sound';
import sound from 'shared/soundService';
import {
  FIGHTERS_NUMBER,
  FIRST_SCREEN_DELAY,
  INITIAL_FIGHTERS,
} from 'shared/constants';
import { setFighters, setScreenNumber, setSelected } from 'redux/actions';
import type {
  SetFightersAction,
  SetScreenNumberAction,
  SetSelectedAction,
} from 'redux/types';
import type { IFightersSelect } from 'shared/types';
import './SelectScreen.scss';
import { getSelected } from 'redux/selectors';

export const SelectScreen: FC = () => {
  const dispatchScreenNumber: Dispatch<SetScreenNumberAction> = useDispatch();
  const dispatchSelected: Dispatch<SetSelectedAction> = useDispatch();
  const dispatchSelectedFighters: Dispatch<SetFightersAction> = useDispatch();
  const selected: number = useSelector(getSelected);

  const [pressedKeys, setPressedKeys] = useState<number>(0);
  const [choosingFighters, setChoosingFighters] =
    useState<IFightersSelect>(INITIAL_FIGHTERS);

  const arrowKeyDownHandler = (code: string): void => {
    sound.play('choosing');
    const dir: number = code === 'ArrowRight' || code === 'ArrowDown' ? 1 : -1;
    const step: number = code === 'ArrowRight' || code === 'ArrowLeft' ? 1 : 5;
    setChoosingFighters(prev => ({
      ...prev,
      [Object.keys(prev)[selected]]:
        (Object.values(prev)[selected] + FIGHTERS_NUMBER + dir * step) %
        FIGHTERS_NUMBER,
    }));
  };

  const keyDownHandler = ({ code }: KeyboardEvent): void => {
    setPressedKeys(counter => counter + 1);
    if (code.includes('Arrow')) arrowKeyDownHandler(code);
    else if (code === 'Enter') dispatchSelected(setSelected());
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler, false);
    sound.play(`selected${selected}`);
    if (selected === 2) {
      setTimeout(() => {
        dispatchScreenNumber(setScreenNumber(2));
      }, FIRST_SCREEN_DELAY);
    }
    return () => {
      document.removeEventListener('keydown', keyDownHandler, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (pressedKeys === 1) sound.play('select');
  }, [pressedKeys]);

  useEffect(() => {
    dispatchSelectedFighters(setFighters(choosingFighters));
  }, [choosingFighters, dispatchSelectedFighters]);

  return (
    <div className="select-container">
      <h1 className="select-title">select your fighter</h1>
      <FighterList />
      <div className="select-fighters">
        <Fighter playerNumber={1} />
        <Fighter playerNumber={2} />
      </div>
      <FighterNames />

      <Sound id="select" />
      <Sound id="choosing" />
      <Sound id="selected1" />
      <Sound id="selected2" />
    </div>
  );
};
