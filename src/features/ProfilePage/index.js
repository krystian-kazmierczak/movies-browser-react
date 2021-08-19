import { Container, Header, Section } from "../../common/Container";
import { apiImage, apiKey } from "../../common/commonValues";
import {
  selectAdditionalData,
  selectItemData,
  selectLoading,
  selectError,
  resetState,
  fetchItem,
} from "../../features/itemSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import noPoster from "../../assets/noPoster.svg";
import { genres } from "../genres";
import { BigTile } from "../../common/Tile/BigTile";
import { MediumTile } from "../../common/Tile/MediumTile";
import { getGenreNames } from "../getGenresNames";
import { getYearFromDate } from "../getYearFromDate";
import { StatusChecker } from "./../../common/StatusChecker/index";
import noProfile from "../../assets/noProfile.svg";

const ProfilePage = () => {
  const movieAdditionalData = useSelector(selectAdditionalData);
  const personData = useSelector(selectItemData);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchItem({ id, type: "person" }));

    return () => resetState();
  }, [id, dispatch]);

  return (
    <Container>
      <StatusChecker isLoading={isLoading} isError={isError}>
        <>
          <BigTile
            profile="true"
            title={personData.name}
            birthDay={personData.birthday}
            placeOfBirth={personData.place_of_birth}
            description={personData.biography}
            src={
              personData.profile_path
                ? `${apiImage}/w200${personData.profile_path}?api_key=${apiKey}`
                : noProfile
            }
          />

          {movieAdditionalData.cast && movieAdditionalData.cast.length > 0 && (
            <>
              <Header>
                Movies - Cast{`(${movieAdditionalData.cast.length})`}
              </Header>
              <Section>
                {movieAdditionalData.cast.map((movie) => (
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
            ${movie.release_date ? "(" : ""}
            ${getYearFromDate(movie.release_date)}
            ${movie.release_date ? ")" : ""}
            `
                    }
                    tags={
                      !!movie.genre_ids.length &&
                      getGenreNames(movie.genre_ids, genres)
                    }
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                  />
                ))}
              </Section>
            </>
          )}
          {movieAdditionalData.crew && movieAdditionalData.crew.length > 0 && (
            <>
              <Header>
                Movies - Crew {`(${movieAdditionalData.crew.length})`}{" "}
              </Header>
              <Section>
                {movieAdditionalData.crew.map((movie) => (
                  <MediumTile
                    src={
                      movie.poster_path
                        ? `${apiImage}/w200${movie.poster_path}?api_key=${apiKey}`
                        : noPoster
                    }
                    title={movie.title}
                    subtitle={
                      !!movie.release_date &&
                      `
              ${movie.job} 
              ${movie.release_date ? "(" : ""} 
              ${getYearFromDate(movie.release_date)}
              ${movie.release_date ? ")" : ""}
              `
                    }
                    tags={
                      !!movie.genre_ids.length &&
                      getGenreNames(movie.genre_ids, genres)
                    }
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                  />
                ))}
              </Section>
            </>
          )}
        </>
      </StatusChecker>
    </Container>
  );
};

export default ProfilePage;
