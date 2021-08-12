import { Content, Image, Subtitle, Tile, Title } from "../styled"

export const SmallTile = ({ imageSrc, title, subtitle }) => {
    return (
        <Tile small>
            <Content>
                <Image small src={imageSrc} />
                <Title small>{title}</Title>
                <Subtitle small>{subtitle}</Subtitle>
            </Content>
        </Tile>
    );
};