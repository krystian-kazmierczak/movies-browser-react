import { Rating } from "../Rating";
import { StyledCover, MainTitle, Wrapper } from "./styled";

const Cover = () => (
    <StyledCover>
        <Wrapper>
            <MainTitle>Mulan long title</MainTitle>
            <Rating
                cover={true}
                rating="7,8"
                votes="335" />
        </Wrapper>
    </StyledCover>
);

export default Cover;