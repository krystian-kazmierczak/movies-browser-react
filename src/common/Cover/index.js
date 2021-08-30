import { Rating } from "../Rating";
import { Header, Title, TextWrapper, PosterWrapper } from "./styled";
import { Container } from "../Container";

const Cover = ({ src, title, rating, votes }) => (
  <Header>
    <Container>
    <PosterWrapper url={src}>
      <TextWrapper>
        <Title>{title}</Title>
        {!!rating && <Rating cover={true} rating={rating} votes={votes} />}
      </TextWrapper>
    </PosterWrapper>
    </Container>
  </Header>
);

export default Cover;
