import { Content, Image, Subtitle, Tile, Title } from "../styled"

export const SmallTile = ({ src, title, subtitle }) => {
    return (
        <Tile small>
            <Image small src={src} />
            <Content>
                <Title small>{title}</Title>
                <Subtitle small>{subtitle}</Subtitle>
            </Content>
        </Tile>
    );
};