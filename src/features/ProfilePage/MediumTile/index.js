import { MobileOnlyView, TabletView, BrowserView } from "react-device-detect";
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
  <>
    <BrowserView>
      <Tile medium>
        <Content>
          <Image medium src={src} />
          <Title medium>{title}</Title>
          <Subtitle medium>{subtitle}</Subtitle>
          <Tags medium>
            {tags.map((tag) => (
              <Tag key={tag} medium>
                {genres[tag.toString()]}
              </Tag>
            ))}
          </Tags>
        </Content>
        {!!rating && <Rating medium={true} rating={rating} votes={votes} />}
      </Tile>
    </BrowserView>
    <TabletView>
      <Tile medium>
        <Content>
          <Image medium src={src} />
          <Title medium>{title}</Title>
          <Subtitle medium>{subtitle}</Subtitle>
          <Tags medium>
            {tags.map((tag) => (
              <Tag key={tag} medium>
                {genres[tag.toString()]}
              </Tag>
            ))}
          </Tags>
        </Content>

        {!!rating && <Rating medium={true} rating={rating} votes={votes} />}
      </Tile>
    </TabletView>
    <MobileOnlyView>
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
    </MobileOnlyView>
  </>
);
