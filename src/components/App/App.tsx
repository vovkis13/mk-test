import React, { useEffect, useState } from "react";
import { SelectScreen } from "components/SelectScreen";
import { VsScreen } from "components/VsScreen";
import { BonusScreen } from "components/BonusScreen";
import type { IFightersSelect } from "shared/types";
import "./App.scss";

const initialFighters: IFightersSelect = {
  firstFighter: -1,
  secondFighter: -1,
};

export const App = () => {
  const [screenNumber, setScreenNumber] = useState<number>(1);
  const [selectedFighters, setSelectedFighters] =
    useState<IFightersSelect>(initialFighters);
  const [bonus, setBonus] = useState<boolean>(false);

  useEffect(() => {
    if (screenNumber === 2)
      setTimeout(() => {
        setScreenNumber(3);
      }, 4000);
  }, [screenNumber]);

  return (
    <div className="App">
      {screenNumber === 1 && (
        <SelectScreen
          changeScreen={setScreenNumber}
          selectFighters={setSelectedFighters}
        />
      )}
      {screenNumber === 2 && (
        <VsScreen fighters={selectedFighters} setBonus={setBonus} />
      )}
      {screenNumber === 3 && <BonusScreen bonus={bonus} />}
    </div>
  );
};
