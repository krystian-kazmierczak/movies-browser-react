import { Container, Header, Section } from "../../common/Container";
import { apiImage, apiKey } from "../../common/commonValues";
import { selectAdditionalData, selectItemData } from "../../features/itemSlice";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import noPoster from "../../assets/noPoster.svg";
import { genres } from "../genres";
import { BigTile } from "./BigTile";
import { MediumTile } from "../../common/Tile/MediumTile";
import { getGenreNames } from "../getGenresNames";
import { getYearFromDate } from "../getYearFromDate";

const ProfilePage = () => {
  const movieAdditionalData = useSelector(selectAdditionalData);
  const personData = useSelector(selectItemData);

  return (
    <Container>
      <BigTile
      profile_path={personData.profile_path}
      name={personData.name}
      birthday={personData.birthday}
      place_of_birth={personData.place_of_birth}
      biography={personData.biography}/>

      {movieAdditionalData.cast && movieAdditionalData.cast.length > 0 && (
        <>
     <Header>Movies - Cast{`(${movieAdditionalData.cast.length})`}</Header>
      <Section>
        { movieAdditionalData.cast.map((movie) => (
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
              !!movie.genre_ids.length && getGenreNames(movie.genre_ids, genres)
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
      <Header>Movies - Crew {`(${movieAdditionalData.crew.length})`} </Header>
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
              !!movie.genre_ids.length && getGenreNames(movie.genre_ids, genres)
            }
            rating={movie.vote_average}
            votes={movie.vote_count}
          />
        ))}
      </Section>
      </>)}
    </Container>
  );
};

export default ProfilePage;
