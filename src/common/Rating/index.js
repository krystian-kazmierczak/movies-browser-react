import star from "../../assets/star.svg";
import { Data, NumericalRating, Scale, Star, Wrapper } from "./styled";

export const Rating = ({ rating, votes }) => (
    <Wrapper>
        <Star src={star}></Star>
        <NumericalRating>{rating}</NumericalRating>
        <Scale>/ 10</Scale>
        {votes && (
            <Data>{votes} votes</Data>
        )}

    </Wrapper>
);