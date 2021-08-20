import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { genres } from "../../genres";
import { apiImage, apiKey } from "../../../common/commonValues";
import { Header, Section } from "../../../common/Container";
import { BigTile } from "../../../common/Tile/BigTile";
import { MediumTile } from "../../../common/Tile/MediumTile";
import { StyledLink } from "../../../common/StyledLink";
import { toMovie } from "../../../common/routes";
import { getGenreNames } from "../../getGenresNames";
import { getYearFromDate } from "../../getYearFromDate";
import { selectAdditionalData, selectItemData } from "../../../features/itemSlice";
import noProfile from "../../../assets/noProfile.svg";
import noPoster from "../../../assets/noPoster.svg";

const ProfileDetails = () => {
    const movieAdditionalData = useSelector(selectAdditionalData);
    const personData = useSelector(selectItemData);

    return (
        <>
            <BigTile
                profile="true"
                title={personData.name}
                birthDay={personData.birthday}
                placeOfBirth={personData.place_of_birth}
                description={personData.biography}
                src={
                    !!personData.profile_path
                        ? `${apiImage}/w200${personData.profile_path}?api_key=${apiKey}`
                        : noProfile
                }
            />
            {!!movieAdditionalData.cast && movieAdditionalData.cast.length > 0 && (
                <>
                    <Header>
                        Movies - Cast{`(${movieAdditionalData.cast.length})`}
                    </Header>
                    <Section>
                        {movieAdditionalData.cast.map((movie) => (
                            <StyledLink key={nanoid()} to={toMovie({ id: movie.id })}>
                                <MediumTile
                                    key={nanoid()}
                                    src={
                                        movie.poster_path
                                            ? `${apiImage}/w200${movie.poster_path}?api_key=${apiKey}`
                                            : noPoster
                                    }
                                    title={movie.title}
                                    subtitle={
                                        !!movie.release_date &&
                                        `
                                        ${movie.character}
                                        ${movie.release_date ? "(" : ""}${getYearFromDate(movie.release_date)}${movie.release_date ? ")" : ""}
                                        `
                                    }
                                    tags={
                                        !!movie.genre_ids &&
                                        getGenreNames(movie.genre_ids, genres)
                                    }
                                    rating={movie.vote_average}
                                    votes={movie.vote_count}
                                />
                            </StyledLink>
                        ))}
                    </Section>
                </>
            )}
            {!!movieAdditionalData.crew && movieAdditionalData.crew.length > 0 && (
                <>
                    <Header>
                        Movies - Crew {`(${movieAdditionalData.crew.length})`}{" "}
                    </Header>
                    <Section>
                        {movieAdditionalData.crew.map((movie) => (
                            <StyledLink key={nanoid()} to={toMovie({ id: movie.id })}>
                                <MediumTile
                                    src={
                                        !!movie.poster_path
                                            ? `${apiImage}/w200${movie.poster_path}?api_key=${apiKey}`
                                            : noPoster
                                    }
                                    title={movie.title}
                                    subtitle={
                                        !!movie.release_date &&
                                        `
                                        ${movie.job} 
                                        ${movie.release_date ? "(" : ""}${getYearFromDate(movie.release_date)}${movie.release_date ? ")" : ""}
                                        `
                                    }
                                    tags={
                                        !!movie.genre_ids &&
                                        getGenreNames(movie.genre_ids, genres)
                                    }
                                    rating={movie.vote_average}
                                    votes={movie.vote_count}
                                />
                            </StyledLink>

                        ))}
                    </Section>
                </>
            )}
        </>
    );
};

export default ProfileDetails;