import { Rating } from "../../Rating";
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
} from "../styled";

export const BigTile = ({
  src,
  title,
  subtitle,
  production,
  releaseDate,
  tags,
  rating,
  votes,
  description,
  profile,
  birthDay,
  placeOfBirth,
}) => {
  return (
    <Tile big>
      <Image src={src} />
      <Content>
        <Title big>{title}</Title>
        <Subtitle big>{subtitle}</Subtitle>
        <AdditionalInfo>
          <InfoDetails>
            <InfoTitle profile={profile}>
              {profile
                ? window.innerWidth > 766
                  ? "Date of bird:"
                  : "Bird:"
                : "Production:"}
            </InfoTitle>
            {profile ? birthDay : production}
          </InfoDetails>
          <InfoDetails>
            <InfoTitle profile={profile}>
              {profile
                ? window.innerWidth > 766
                  ? "Place of bird:"
                  : ""
                : "Release date:"}
            </InfoTitle>
            {profile ? placeOfBirth : releaseDate}
          </InfoDetails>
        </AdditionalInfo>
        {profile ? (
          <></>
        ) : (
          <>
            {!!tags && (
              <Tags medium>
                {tags.map((tag) => (
                  <Tag key={Math.random()} medium>
                    {tag.name}
                  </Tag>
                ))}
              </Tags>
            )}
            {!!rating && <Rating rating={rating} votes={votes} />}
          </>
        )}
      </Content>
      <Description>{description}</Description>
    </Tile>
  );
};
