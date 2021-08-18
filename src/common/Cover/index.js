import { Rating } from "../Rating";
import { Header, Title, Wrapper } from "./styled";

const Cover = ({ src, title, rating, votes }) => (
  <Header url={src}>
    <Wrapper>
      <Title>{title}</Title>
      {!!rating && <Rating cover={true} rating={rating} votes={votes} />}
    </Wrapper>
  </Header>
);

export default Cover;
