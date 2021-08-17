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
}) => {
  return (
    <Tile big>
      <Image src={src} />
      <Content>
        <Title big>{title}</Title>
        <Subtitle big>{subtitle}</Subtitle>
        <AdditionalInfo>
          <InfoDetails >
            <InfoTitle>Production:</InfoTitle>
            {production}
          </InfoDetails>
          <InfoDetails >
            <InfoTitle>Release date:</InfoTitle>
            {releaseDate}
          </InfoDetails>
        </AdditionalInfo>
        {!!tags && (<Tags medium>
          {tags.map((tag) => (
            <Tag key={Math.random()} medium>
              {tag.name}
            </Tag>
          ))}
        </Tags>)}
        {!!rating && <Rating rating={rating} votes={votes} />}
      </Content>
      <Description>{description}</Description>
    </Tile>
  );
};
