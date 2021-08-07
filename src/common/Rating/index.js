import star from "../../assets/star.svg";
import { Data, NumericalRating, Scale, Star, Wrapper } from "./styled";

export const Rating = ({ rating, votes, medium }) => (
    <Wrapper medium={medium}>
        <Star src={star}></Star>
        <NumericalRating medium={medium}>{rating}</NumericalRating>
        {!medium && (
            <Scale>/ 10</Scale>
        )}
        {votes && (
            <Data medium={medium}>{votes} votes</Data>
        )}
    </Wrapper>
);