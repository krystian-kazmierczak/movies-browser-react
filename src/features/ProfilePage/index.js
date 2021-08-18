import { Container, Header, Section } from "../../common/Container";
import { apiImage, apiKey } from "../../common/commonValues";
import noPoster from "../../assets/noPoster.svg";
import { genres } from "../genres";
import { BigTile } from "./BigTile";
import { MediumTile } from "../../common/Tile/MediumTile";
import { getGenreNames } from "../getGenresNames";
import { getYearFromDate } from "../getYearFromDate";

const ProfilePage = ({
  cast,
  crew,
}) => {
  return (
    <Container>
      <BigTile/>
      <Header>Movies - Cast ({cast.length})</Header>
      <Section>
        {cast.map((movie) => (
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
      <Header>Movies - Crew ({crew.length})</Header>
      <Section>
        {crew.map((movie) => (
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
    </Container>
  );
};

export default ProfilePage;
