import { Section, SectionTitle } from "./styled";
import { apiImage, apiKey } from "../../common/commonValues";
import noPoster from "../../assets/noPoster.svg";
import { genres } from "../genres";
import { BigTile } from "./BigTile";
import { MediumTile } from "../../common/Tile/MediumTile";
import { getGenreNames } from "../getGenresNames";
import { getYearFromDate } from "../getYearFromDate";

const ProfilePage = ({
  name,
  birthDay,
  placeOfBirth,
  description,
  poster,
  cast,
}) => {
  return (
    <>
      <BigTile
        name={name}
        birthDay={birthDay}
        placeOfBirth={placeOfBirth}
        description={description}
        poster={poster}
      />
      <SectionTitle>Movies - Cast ({cast.length})</SectionTitle>
      <Section>
        {cast.map((movie) => (
          <MediumTile
            src={
              movie.poster_path
                ? `${apiImage}/w200${movie.poster_path}?api_key=${apiKey}`
                : noPoster
            }
            title={movie.title}
            subtitle={`${movie.character} ${
              movie.release_date ? "(" : ""
            }${getYearFromDate(movie.release_date)}${
              movie.release_date ? ")" : ""
            }`}
            tags={(getGenreNames(movie.genre_ids, genres))}
            rating={movie.vote_average}
            votes={movie.vote_count}
          />
        ))}
      </Section>
    </>
  );
};

export default ProfilePage;
