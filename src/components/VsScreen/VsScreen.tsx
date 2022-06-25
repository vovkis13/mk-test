import React, { useEffect, useState } from "react";
import { VsFighter } from "./components/VsFighter";
import { BonusList } from "./components/BonusList";
import { FIGHTERS_MOVING_TIME } from "shared/constants";
import { Sound } from "components/Sound";
import sound from "shared/soundService";
import "./VsScreen.scss";

export const VsScreen: React.FC = () => {
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
        <VsFighter player={1} />
        <VsFighter player={2} />
      </div>
      <BonusList />
      
      <Sound id="versus" />
    </div>
  );
};
