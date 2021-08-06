import { Rating } from "../../common/Rating";
import { Content, Image, Subtitle, Tag, Tags, Tile, Title } from "../../common/Tile";
import noPoster from "../../assets/noPoster.svg";

const MoviePage = () => {
    return (
        <Tile columnTile>
            <Image columnTile src={noPoster} />
            <Content>
                <Title columnTile>Mulan long title long title long long</Title>
                <Subtitle columnTile>2020</Subtitle>
                <Tags columnTile>
                    <Tag columnTile>Action</Tag>
                    <Tag columnTile>Adventure</Tag>
                    <Tag columnTile>Drama</Tag>
                </Tags>
            </Content>
            <Rating
                columnTile={true}
                rating="7,8"
                votes="335"
            />
        </Tile>
    );
};

export default MoviePage;