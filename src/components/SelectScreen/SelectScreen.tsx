import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FighterList } from "./components/FighterList";
import { Fighter } from "./components/Fighter";
import { FighterNames } from "./components/FighterNames";
import { Sound } from "../Sound";
import sound from "shared/soundService";
import { FIGHTERS_NUMBER, FIRST_SCREEN_DELAY } from "shared/constants";
import type { IFightersSelect } from "shared/types";
import "./SelectScreen.scss";

interface SelectScreenProps {
  selectFighters: Dispatch<SetStateAction<IFightersSelect>>;
  changeScreen: Dispatch<SetStateAction<number>>;
}

const initialFighters: IFightersSelect = {
  firstFighter: 0,
  secondFighter: 4,
};

export const SelectScreen = (props: SelectScreenProps): JSX.Element => {
  const { selectFighters, changeScreen } = props;

  const [pressedEnter, setPressedEnter] = useState<number>(0);
  const [choosingFighters, setChoosingFighters] =
    useState<IFightersSelect>(initialFighters);

  const arrowKeyDownHandler = (code: string): void => {
    sound.play("choosing");
    const dir: number = code === "ArrowRight" || code === "ArrowDown" ? 1 : -1;
    const step: number = code === "ArrowRight" || code === "ArrowLeft" ? 1 : 5;

    setChoosingFighters((prev) => ({
      ...prev,
      [Object.keys(prev)[pressedEnter]]:
        (Object.values(prev)[pressedEnter] + FIGHTERS_NUMBER + dir * step) %
        FIGHTERS_NUMBER,
    }));
  };

  const keyDownHandler = ({ code }: KeyboardEvent): void => {
    if (code.includes("Arrow")) arrowKeyDownHandler(code);
    else if (code === "Enter") setPressedEnter((counter) => counter + 1);
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, false);
    sound.play(`selected${pressedEnter}`);
    if (pressedEnter === 2) {
      selectFighters(choosingFighters);
      setTimeout(() => {
        changeScreen(2);
      }, FIRST_SCREEN_DELAY);
    }
    return () => {
      document.removeEventListener("keydown", keyDownHandler, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pressedEnter]);

  return (
    <div className="select-container">
      <h1 className="select-title">select your fighter</h1>
      <FighterList selection={choosingFighters} />
      <div className="select-fighters">
        <Fighter player={1} fighterId={choosingFighters.firstFighter} />
        <Fighter player={2} fighterId={choosingFighters.secondFighter} />
      </div>
      <FighterNames fighters={choosingFighters} selected={pressedEnter} />

      <Sound id="choosing" />
      <Sound id="selected1" />
      <Sound id="selected2" />
    </div>
  );
};
