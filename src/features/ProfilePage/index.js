import { Section, SectionTitle } from "./styled";
import { apiImage, apiKey } from "../../common/commonValues";
import noPoster from "../../assets/noPoster.svg";
import { genres } from "./exampleData";
import { BigTile } from "./BigTile";
import { MediumTile } from "./MediumTile";

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
            } ${movie.release_date.substr(0, 4)} ${
              movie.release_date ? ")" : ""
            }`}
            tags={movie.genre_ids}
            rating={movie.vote_average}
            votes={movie.vote_count}
            genres={genres}
          />
        ))}
      </Section>
    </>
  );
};

export default ProfilePage;
