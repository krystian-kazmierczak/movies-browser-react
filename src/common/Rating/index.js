import { BrowserView, MobileOnlyView } from "react-device-detect";
import star from "../../assets/star.svg";
import { Data, NumericalRating, Scale, Star, Wrapper, RatingContainer } from "./styled";

export const Rating = ({ rating, votes, medium, cover }) => {
    if (cover) {
        return (
            <>
                <BrowserView>
                    <Wrapper cover={cover}>
                        <div>
                            <Star src={star} cover={cover}></Star>
                            <NumericalRating cover={cover}>{rating}</NumericalRating>
                            {!medium && (
                                <Scale cover={cover}>/ 10</Scale>
                            )}
                        </div>
                        {votes && (
                            <Data cover={cover}>{votes} votes</Data>
                        )}
                    </Wrapper>
                </BrowserView>
                <MobileOnlyView>
                    <Wrapper cover={cover}>
                        <Star src={star} cover={cover}></Star>
                        <NumericalRating cover={cover}>{rating}</NumericalRating>
                        {!medium && (
                            <Scale cover={cover}>/ 10</Scale>
                        )}
                        {votes && (
                            <Data cover={cover}>{votes} votes</Data>
                        )}
                    </Wrapper>
                </MobileOnlyView>
            </>
        )
    }

    return (
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
};