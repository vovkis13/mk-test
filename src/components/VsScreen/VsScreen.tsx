import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { VsFighter } from "./components/VsFighter";
import { BonusList } from "./components/BonusList";
import { FIGHTERS_MOVING_TIME } from "shared/constants";
import { Sound } from "components/Sound";
import sound from "shared/soundService";
import type { IFightersSelect } from "shared/types";
import "./VsScreen.scss";

interface VsScreenProps {
  fighters: IFightersSelect;
  setBonus: Dispatch<SetStateAction<boolean>>;
}

export const VsScreen = (props: VsScreenProps): JSX.Element => {
  const { fighters, setBonus } = props;
  const [isMoving, setIsMoving] = useState<boolean>(true);

  useEffect(() => {
    sound.play("versus");
    const timeout = setTimeout(() => {
      setIsMoving(false);
    }, FIGHTERS_MOVING_TIME);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="vs-container">
      <h1 className="vs-title">battle 1</h1>
      <img
        className="vs-versus"
        src={`${process.env.PUBLIC_URL}/vs.png`}
        alt="versus"
      />
      <div className={`vs-fighters ${isMoving ? "moving" : ""}`}>
        <VsFighter fighterId={fighters.firstFighter} player={1} />
        <VsFighter fighterId={fighters.secondFighter} player={2} />
      </div>
      <BonusList setBonus={setBonus} />
      
      <Sound id="versus" />
    </div>
  );
};
