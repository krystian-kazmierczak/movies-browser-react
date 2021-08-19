import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { apiImage, apiKey } from "../../../common/commonValues";
import { SmallTile } from "../../../common/Tile/SmallTile";
import { Header, Section } from "../../../common/Container/index";
import noProfile from "../../../assets/noProfile.svg";
import { selectAdditionalData, selectItemData } from "../../itemSlice";
import { toProfile } from "../../../common/routes";
import { StyledLink } from "../../../common/StyledLink";
import { Container } from "../../../common/Container/index";
import noPoster from "../../../assets/noPoster.svg";
import { getYearFromDate } from "../../getYearFromDate";
import { BigTile } from "../../../common/Tile/BigTile";
import Cover from "../../../common/Cover";

const MovieDetails = () => {
    const movie = useSelector(selectItemData);
    const movieAdditionalData = useSelector(selectAdditionalData);

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
                <Header>Cast</Header>
                <Section>
                    {movieAdditionalData.cast.map((person) => (
                        <StyledLink key={nanoid()} to={toProfile({ id: person.id })}>
                            <SmallTile
                                key={nanoid()}
                                src={
                                    !!person.profile_path
                                        ? `${apiImage}/w500${person.profile_path}?api_key=${apiKey}`
                                        : noProfile
                                }
                                title={person.name}
                                subtitle={person.character}
                            />
                        </StyledLink>
                    ))}
                </Section>
                <Header>Crew</Header>
                <Section>
                    {movieAdditionalData.crew.map((person) => (
                        <StyledLink key={nanoid()} to={toProfile({ id: person.id })}>
                            <SmallTile
                                key={nanoid()}
                                src={
                                    !!person.profile_path
                                        ? `${apiImage}/w500${person.profile_path}?api_key=${apiKey}`
                                        : noProfile
                                }
                                title={person.name}
                                subtitle={person.job}
                            />
                        </StyledLink>
                    ))}
                </Section>
            </Container>
        </>
    );
};

export default MovieDetails;