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
  hidden,
}) => (
  <Tile medium hidden={hidden}>
    <Image medium src={src} />
    <Content>
      <div>
        <Title medium>{title}</Title>
        <Subtitle medium>{subtitle}</Subtitle>
        {!!tags && (<Tags medium>
          {tags.map((tag) => (
            <Tag key={tag} medium>
              {tag}
            </Tag>
          ))}
        </Tags>)}
      </div>
      {!!rating && <Rating medium={true} rating={rating} votes={votes} />}
    </Content>
  </Tile>
);
