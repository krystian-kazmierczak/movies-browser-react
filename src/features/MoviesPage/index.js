import { MobileView, BrowserView } from 'react-device-detect';
import { Rating } from "../../common/Rating";
import { Content, Image, Subtitle, Tag, Tags, Tile, Title } from "../../common/Tile";
import noPoster from "../../assets/noPoster.svg";

const MoviesPage = () => {
    return (
        <>
            <BrowserView>
                <Tile medium>
                    <Content>
                        <Image medium src={noPoster} />
                        <Title medium>Mulan long title long title long long</Title>
                        <Subtitle medium>2020</Subtitle>
                        <Tags medium>
                            <Tag medium>Action</Tag>
                            <Tag medium>Adventure</Tag>
                            <Tag medium>Drama</Tag>
                        </Tags>
                    </Content>
                    <Rating
                        medium={true}
                        rating="7,8"
                        votes="335"
                    />
                </Tile>
            </BrowserView>
            <MobileView>
                <Tile medium>
                    <Image medium src={noPoster} />
                    <Content>
                        <Title medium>Mulan long title long title long long</Title>
                        <Subtitle medium>2020</Subtitle>
                        <Tags medium>
                            <Tag medium>Action</Tag>
                            <Tag medium>Adventure</Tag>
                            <Tag medium>Drama</Tag>
                        </Tags>
                        <Rating
                            medium={true}
                            rating="7,8"
                            votes="335"
                        />
                    </Content>
                </Tile>
            </MobileView>
        </>
    );
};

export default MoviesPage;