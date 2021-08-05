import { Number, Arrow, PagerButton, Text, Wrapper, PageNumberContainer } from "./styled";
import leftArrow from "../../assets/leftArrow.svg"
import rightArrow from "../../assets/rightArrow.svg"

const Pager = () => (
    <Wrapper>
        <PagerButton><Arrow src={leftArrow} alt="left arrow" />First</PagerButton>
        <PagerButton><Arrow src={leftArrow} alt="left arrow" />Previous</PagerButton>
        <PageNumberContainer>
            <Text>Page</Text>
            <Number>1</Number>
            <Text>of</Text>
            <Number>500</Number>
        </PageNumberContainer>
        <PagerButton>Next<Arrow src={rightArrow} alt="right arrow" /></PagerButton>
        <PagerButton>Last<Arrow src={rightArrow} alt="right arrow" /></PagerButton>
    </Wrapper>
);

export default Pager;