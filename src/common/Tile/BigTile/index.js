import { useState, useEffect } from "react";
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
  const [isMobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 767px)");
    setMobileScreen(mediaWatcher.matches);

    const updateIsMobileScreen = (e) => setMobileScreen(e.matches);
    mediaWatcher.addEventListener("change", updateIsMobileScreen);
    
    return () => mediaWatcher.removeEventListener("change", updateIsMobileScreen);
  }, [isMobileScreen]);

  return (
    <Tile big>
      <Image src={src} />
      <Content profile={profile}>
        <Title big>{title}</Title>
        <Subtitle big profile={profile}>
          {subtitle}
        </Subtitle>
        <AdditionalInfo>
          {production || birthDay ? (
            <InfoDetails>
              <InfoTitle profile={profile}>
                {profile
                  ? !isMobileScreen
                    ? "Date of birth:"
                    : "Birth:"
                  : "Production:"}
              </InfoTitle>
              {profile ? birthDay : production}
            </InfoDetails>
          ) : (
            ""
          )}
          {releaseDate || placeOfBirth ? (
            <InfoDetails>
              {profile ? (
                !isMobileScreen ? (
                  <InfoTitle profile={profile}>Place of birth:</InfoTitle>
                ) : (
                  <></>
                )
              ) : (
                <InfoTitle>Release date:</InfoTitle>
              )}
              {profile ? placeOfBirth : releaseDate}
            </InfoDetails>
          ) : (
            ""
          )}
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
