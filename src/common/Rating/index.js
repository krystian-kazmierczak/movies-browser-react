import star from "./star.svg";
import { Rate, Scale, Star, Vote, Wrapper } from "./styled";

export const Rating = ({ rating, votes, cover }) => {
  return (
    <Wrapper cover={cover}>
      <Star src={star} cover={cover}></Star>
      <Rate cover={cover}>{rating}</Rate>
      <Scale cover={cover}>/ 10</Scale>
      <Vote cover={cover}>{votes} votes</Vote>
    </Wrapper>
  );
};
