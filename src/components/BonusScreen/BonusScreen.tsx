import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Sound } from "components/Sound";
import sound from "shared/soundService";
import { getBonusStatus } from "redux/selectors";
import "./BonusScreen.scss";

export const BonusScreen: React.FC = () => {
  const bonusStatus: boolean = useSelector(getBonusStatus);

  useEffect(() => {
    if (bonusStatus) sound.play("bonus");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bonus-container">
      <img
        className={`bonus-logo ${bonusStatus ? "bonus" : ""}`}
        src={`${process.env.PUBLIC_URL}/mk-logo.png`}
        alt="mortal kombat logo"
      />
      {bonusStatus && <Sound id="bonus" />}
    </div>
  );
};
