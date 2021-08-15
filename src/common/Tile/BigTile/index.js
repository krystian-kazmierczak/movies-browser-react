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
  imageSrc,
  title,
  subtitle,
  info,
  tags,
  rating,
  votes,
  description,
}) => {
  return (
    <Tile big>
      <Image src={imageSrc} />
      <Content>
        <Title big>{title}</Title>
        <Subtitle big>{subtitle}</Subtitle>
        <AdditionalInfo>
          {info.map((info) => (
            <InfoDetails key={Math.random()}>
              <InfoTitle>{info.title}</InfoTitle>
              {info.details}
            </InfoDetails>
          ))}
        </AdditionalInfo>
        <Tags medium>
          {tags.map((tag) => (
            <Tag key={tag} medium>
              {tag}
            </Tag>
          ))}
        </Tags>
        <Rating rating={rating} votes={votes} />
      </Content>
      <Description>{description}</Description>
    </Tile>
  );
};
