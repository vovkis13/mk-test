import React, { useEffect } from "react";
import { Sound } from "components/Sound";
import sound from "shared/soundService";
import "./BonusScreen.scss";

interface BonusScreenProps {
  bonus: boolean;
}

export const BonusScreen = ({ bonus }: BonusScreenProps): JSX.Element => {
  useEffect(() => {
    if (bonus) sound.play("bonus");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bonus-container">
      <img
        className={`bonus-logo ${bonus ? "bonus" : ""}`}
        src="mk-logo.png"
        alt="mortal kombat logo"
      />
      {bonus && <Sound id="bonus" />}
    </div>
  );
};
