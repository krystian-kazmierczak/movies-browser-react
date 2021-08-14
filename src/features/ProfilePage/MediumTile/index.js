import { Rating } from "../../../common/Rating";
import {
  Content,
  Image,
  Subtitle,
  Tag,
  Tags,
  Tile,
  Title,
} from "../../../common/Tile/styled";

export const MediumTile = ({
  src,
  title,
  subtitle,
  tags,
  rating,
  votes,
  genres,
}) => (
      <Tile medium>
        <Image medium src={src} />
        <Content>
          <Title medium>{title}</Title>
          <Subtitle medium>{subtitle}</Subtitle>
          <Tags medium>
            {tags.map((tag) => (
              <Tag key={tag} medium>
                {genres[tag.toString()]}
              </Tag>
            ))}
          </Tags>
          {!!rating && <Rating medium={true} rating={rating} votes={votes} />}
        </Content>
      </Tile>
);
