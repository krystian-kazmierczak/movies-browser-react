import { Content, Image, Subtitle, Tile, Title } from "../styled"

export const SmallTile = ({ src, title, subtitle, hidden }) => {
  return (
    <Tile small hidden={hidden}>
      <Image small src={src} />
      <Content>
        <Title small>{title}</Title>
        <Subtitle small>{subtitle}</Subtitle>
      </Content>
    </Tile>
  );
};