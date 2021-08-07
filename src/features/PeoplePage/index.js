import { Content, Image, Subtitle, Tile, Title } from "../../common/Tile"
import noProfile from "../../assets/noProfile.svg";

const PeoplePage = () => {
    return (
        <Tile small>
            <Content>
                <Image small src={noProfile} />
                <Title small>Liu Yifei</Title>
                <Subtitle small>Mulan</Subtitle>
            </Content>
        </Tile>
    );
};

export default PeoplePage;