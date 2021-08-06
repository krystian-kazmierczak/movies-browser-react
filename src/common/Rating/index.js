import star from "../../assets/star.svg";
import { Data, NumericalRating, Scale, Star, Wrapper } from "./styled";

export const Rating = ({ rating, votes, columnTile }) => (
    <Wrapper columnTile={columnTile}>
        <Star src={star}></Star>
        <NumericalRating columnTile={columnTile}>{rating}</NumericalRating>
        {!columnTile && (
            <Scale>/ 10</Scale>
        )}
        {votes && (
            <Data columnTile={columnTile}>{votes} votes</Data>
        )}
    </Wrapper>
);