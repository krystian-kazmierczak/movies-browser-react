import { Rating } from "../Rating";
import { Header, Title, Wrapper } from "./styled";

const Cover = () => (
  <Header>
    <Wrapper>
      <Title>Mulan long title</Title>
      <Rating cover={true} rating="7,8" votes="335" />
    </Wrapper>
  </Header>
);

export default Cover;
