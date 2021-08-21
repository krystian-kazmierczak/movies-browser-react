import { useSelector } from "react-redux";
import { apiImage, apiKey } from "../../../common/commonValues";
import { Header } from "../../../common/Container/index";
import { selectItemData } from "../../itemSlice";
import { Container } from "../../../common/Container/index";
import noPoster from "../../../assets/noPoster.svg";
import { getYearFromDate } from "../../getYearFromDate";
import { BigTile } from "../../../common/Tile/BigTile";
import Cover from "../../../common/Cover";
import Section from "../../../common/Section";

const MovieDetails = () => {
    const movie = useSelector(selectItemData);

    return (
        <>
            {movie.backdrop_path && (
                <Cover
                    src={`${apiImage}/original${movie.backdrop_path}?api_key=${apiKey}`}
                    title={movie.title}
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                />
            )}
            <Container>
                <BigTile
                    src={
                        !!movie.poster_path
                            ? `${apiImage}/w500${movie.poster_path}?api_key=${apiKey}`
                            : noPoster
                    }
                    title={movie.title}
                    subtitle={!!movie.release_date ? getYearFromDate(movie.release_date) : ""}
                    production={(!!movie.production_countries && (movie.production_countries.length > 0)) ? movie.production_countries[0].name : ""}
                    releaseDate={!!movie.release_date ? movie.release_date.replaceAll(`-`, '.') : ""}
                    tags={movie.genres}
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                    description={movie.overview}
                />
                <Header>Cast</Header>
                <Section
                    movieDetails={true}
                />

                <Header>Crew</Header>
                <Section
                    movieDetails={true}
                    crew={true}
                />


            </Container>
        </>
    );
};

export default MovieDetails;