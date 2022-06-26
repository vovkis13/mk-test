import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Dispatch } from "redux";
import { SelectScreen } from "components/SelectScreen";
import { VsScreen } from "components/VsScreen";
import { BonusScreen } from "components/BonusScreen";
import { getScreenNumber } from "redux/selectors";
import { setScreenNumber } from "redux/actions";
import { SECOND_SCREEN_DELAY } from "shared/constants";
import type { SetScreenNumberAction } from "redux/types";
import "./App.scss";

export const App: FC = () => {
  const screenNumber: number = useSelector(getScreenNumber);
  const dispatch: Dispatch<SetScreenNumberAction> = useDispatch();

  useEffect(() => {
    if (screenNumber === 2)
      setTimeout(() => {
        dispatch(setScreenNumber(3));
      }, SECOND_SCREEN_DELAY);
  }, [dispatch, screenNumber]);

  return (
    <div className="App">
      {screenNumber === 1 && <SelectScreen/>}
      {screenNumber === 2 && <VsScreen />}
      {screenNumber === 3 && <BonusScreen />}
    </div>
  );
};
