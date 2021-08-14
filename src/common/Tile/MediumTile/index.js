import { Rating } from "../../Rating";
import { Content, Image, Subtitle, Tag, Tags, Tile, Title } from "../styled";

export const MediumTile = ({
  imageSrc,
  title,
  subtitle,
  tags,
  rating,
  votes,
}) => {
  return (
    <Tile medium>
      <Image medium src={imageSrc} />
      <Content>
        <Title medium>{title}</Title>
        <Subtitle medium>{subtitle}</Subtitle>
        <Tags medium>
          {tags.map((tag) => (
            <Tag key={Math.random()} medium>
              {tag}
            </Tag>
          ))}
        </Tags>
        <Rating medium={true} rating={rating} votes={votes} />
      </Content>
    </Tile>
  );
};
