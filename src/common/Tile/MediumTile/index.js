import { Rating } from "../../Rating";
import {
  Content,
  Image,
  Subtitle,
  Tag,
  Tags,
  Tile,
  Title,
} from "../styled";

export const MediumTile = ({
  src,
  title,
  subtitle,
  tags,
  rating,
  votes,
}) => (
      <Tile medium>
        <Image medium src={src} />
        <Content>
          <Title medium>{title}</Title>
          <Subtitle medium>{subtitle}</Subtitle>
          <Tags medium>
            {tags.map((tag) => (
              <Tag key={tag} medium>
                {tag}
              </Tag>
            ))}
          </Tags>
          {!!rating && <Rating medium={true} rating={rating} votes={votes} />}
        </Content>
      </Tile>
);
