import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BonusListItem } from "./components/BonusListItem";
import { BONUS_KEYS, BONUS_CODE } from "shared/constants";
import { incrementValueByIndex } from "shared/incrementValueByIndex";
import "./BonusList.scss";

interface BonusListProps {
  setBonus: Dispatch<SetStateAction<boolean>>;
}

export const BonusList = ({setBonus}:BonusListProps): JSX.Element => {
  const [bonuses, setBonuses] = useState<number[]>(new Array(6).fill(0));

  const keyDownHandler = ({ code }: KeyboardEvent): void => {
    const bonusIndex = BONUS_KEYS.findIndex((key) => key === code);
    if (bonusIndex >= 0) 
      setBonuses((prevState) => incrementValueByIndex(prevState, bonusIndex));
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, false);
    return () => {
      document.removeEventListener("keydown", keyDownHandler, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

useEffect(() => {
  if (bonuses.join('') === BONUS_CODE) setBonus(true);
}, [bonuses, setBonus])


  return (
    <ul className="bonus-list">
      {bonuses.map((bonus, index) => (
        <BonusListItem key={index} bonus={bonus} />
      ))}
    </ul>
  );
};
