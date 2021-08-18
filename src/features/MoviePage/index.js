import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BigTile } from "../../common/Tile/BigTile";
import Cover from "../../common/Cover";
import { StatusChecker } from "../../common/StatusChecker";
import { Container } from "./../../common/Container/index";
import { apiImage, apiKey } from "../../common/commonValues";
import noPoster from "../../assets/noPoster.svg";
import { getYearFromDate } from "../getYearFromDate";
import {
    selectItemData,
    selectLoading,
    selectError,
    fetchItem,
    resetState,
} from "../itemSlice";
import MovieDetails from "./MovieDetails";

const MoviePage = () => {
    const dispatch = useDispatch();
    const movie = useSelector(selectItemData);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchItem({ id, type: "movie" }));

        return () => resetState();
    }, [id, dispatch]);

    return (

        <StatusChecker isError={isError} isLoading={isLoading}>
            <>
                <Cover
                    title={movie.title}
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                />
                <Container>
                    <BigTile
                        src={
                            movie.poster_path
                                ? `${apiImage}/w500${movie.poster_path}?api_key=${apiKey}`
                                : noPoster
                        }
                        title={movie.title}
                        subtitle={movie.release_date ? getYearFromDate(movie.release_date) : ""}
                        production={movie.production_countries ? movie.production_countries[0].name : ""}
                        releaseDate={movie.release_date ? movie.release_date.replaceAll(`-`, '.') : ""}
                        tags={movie.genres}
                        rating={movie.vote_average}
                        votes={movie.vote_count}
                        description={movie.overview}
                    />
                    <MovieDetails />
                </Container>
            </>
        </StatusChecker>

    );
};

export default MoviePage;