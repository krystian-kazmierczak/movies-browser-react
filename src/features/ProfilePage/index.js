import { isMobileOnly } from "react-device-detect";
import {
  AdditionalInfo,
  Content,
  Description,
  Image,
  InfoDetails,
  InfoTitle,
  Subtitle,
  Tag,
  Tags,
  Tile,
  Title,
} from "../../common/Tile";
import { Section, SectionTitle } from "./styled";
import { apiImage, apiKey } from "../../common/commonValues";
import { Rating } from "../../common/Rating";
import noPoster from "../../assets/noPoster.svg";
import { genres } from "./exampleData";

const ProfilePage = ({
  name,
  birthDay,
  placeOfBirth,
  description,
  poster,
  cast,
}) => {
  if (isMobileOnly) {
    return (
      <Tile big>
        <Image src={poster} />
        <Content>
          <Title big>{name}</Title>
          <AdditionalInfo>
            <InfoDetails>
              <InfoTitle>Date of bird:</InfoTitle>
              {birthDay}
            </InfoDetails>
            <InfoDetails>
              <InfoTitle>Place of bird:</InfoTitle>
              {placeOfBirth}
            </InfoDetails>
          </AdditionalInfo>
        </Content>
        <Description>{description}</Description>
      </Tile>
    );
  }
  return (
    <>
      <Tile big>
        <Image src={poster} />
        <Content>
          <Title big>{name}</Title>
          <AdditionalInfo>
            <InfoDetails>
              <InfoTitle>Date of bird:</InfoTitle>
              {birthDay}
            </InfoDetails>
            <InfoDetails>
              <InfoTitle>Place of bird:</InfoTitle>
              {placeOfBirth}
            </InfoDetails>
          </AdditionalInfo>
          <Description>{description}</Description>
        </Content>
      </Tile>
      <SectionTitle>Movies - Cast ({cast.length})</SectionTitle>
      <Section>
        {cast.map((movie) => (
          <Tile medium>
            <Image
              medium
              src={
                movie.poster_path
                  ? apiImage +
                    "/w200" +
                    movie.poster_path +
                    "?api_key=" +
                    apiKey
                  : noPoster
              }
            />
            <Title medium>{movie.title}</Title>
            <Subtitle medium></Subtitle>
            <Subtitle medium>{movie.character}</Subtitle>
            {movie.genre_ids && (
              <Tags medium>
                {movie.genre_ids.map((id) => (
                  <Tag key={id}>{genres[id.toString()]}</Tag>
                ))}
              </Tags>
            )}
            {movie.vote_average && (
              <Rating
                medium={true}
                rating={movie.vote_average}
                votes={movie.vote_count}
              />
            )}
          </Tile>
        ))}
      </Section>
    </>
  );
};

export default ProfilePage;
