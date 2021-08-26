import React from "react";
import { MiniImage, MiniText, MiniWrapper } from "./styled";
import { toMovie, toProfile } from "./../../../common/routes";
import { nanoid } from "@reduxjs/toolkit";

export const GenerateTile = ({ pathText, id, image, text }) => {
  return (
    <MiniWrapper
      key={nanoid()}
      to={pathText === "movie" ? toMovie({ id: id }) : toProfile({ id: id })}
    >
      <MiniImage src={image} />
      <MiniText>{text}</MiniText>
    </MiniWrapper>
  );
};
