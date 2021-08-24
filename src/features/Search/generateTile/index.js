import React from "react";
import { MiniImage, MiniText, MiniWrapper } from "./styled";

export const GenerateTile = ({ pathText, id, image, text }) => {
  return (
    <MiniWrapper to={pathText === "movie" ? `/movie/${id}` : `/person/${id}`}>
      <MiniImage src={image} />
      <MiniText>{text}</MiniText>
    </MiniWrapper>
  );
};
