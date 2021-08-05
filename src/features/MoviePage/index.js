import { Container } from "../../common/Container";
import { Rating } from "../../common/Rating";
import { AdditionalInfo, Content, Description, Image, InfoDetails, InfoTitle, Subtitle, Tag, Tags, Tile, Title } from "../../common/Tile";
import noPoster from "../../assets/noPoster.svg";

const MoviePage = () => (
    <Container>
        <Tile>
            <Image src={noPoster} />
            <Content>
                <Title>Mulan</Title>
                <Subtitle>2020</Subtitle>
                <AdditionalInfo>
                    <InfoDetails>
                        <InfoTitle>Production:</InfoTitle>
                        China, USA
                    </InfoDetails>
                    <InfoDetails>
                        <InfoTitle>Release date:</InfoTitle>
                        24.10.2020
                    </InfoDetails>
                </AdditionalInfo>
                <Tags>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                    <Tag>Drama</Tag>
                </Tags>
                <Rating
                    rating="7,8"
                    votes="335"
                />
                <Description>
                    A young Chinese maiden disguises herself as a male warrior in order to save her father.
                    Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
                </Description>
            </Content>
        </Tile>
    </Container>
);

export default MoviePage;