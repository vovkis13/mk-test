import React from "react";
import type { IFighter } from "shared/types";

interface FighterListItemProps {
  fighter: IFighter;
  selected1: boolean;
  selected2: boolean;
}

export const FighterListItem = (props: FighterListItemProps): JSX.Element => {
  const { fighter, selected1, selected2 } = props;
  return (
    <li
      className={`fighters-item 
      ${selected1 ? "selected1" : ""} 
      ${selected2 ? "selected2" : ""}`}
    >
      <img
        className={"fighters-item-icon"}
        src={`${process.env.PUBLIC_URL}/fighters/${fighter.file}/${fighter.file}-icon.webp`}
        alt={fighter.name}
      />
    </li>
  );
};
