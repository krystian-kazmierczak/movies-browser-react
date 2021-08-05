import { Number, Arrow, PagerButton, Text, Wrapper, PageNumberContainer } from "./styled";
import leftArrowBlue from "../../assets/leftArrowBlue.svg"
import rightArrowBlue from "../../assets/rightArrowBlue.svg"
import leftArrowGray from "../../assets/leftArrowGray.svg"
import rightArrowGray from "../../assets/rightArrowGray.svg"

const Pager = ({ numberOfPages, currentPageNumber }) => {
    const isFirstPage = () => currentPageNumber === 1;
    const isLastPage = () => currentPageNumber === numberOfPages;

    return (
        <Wrapper>
            <PagerButton disabled={isFirstPage()}>
                <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                First
            </PagerButton>
            <PagerButton disabled={isFirstPage()}>
                <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                Previous
            </PagerButton>
            <PageNumberContainer>
                <Text>Page</Text>
                <Number>{currentPageNumber}</Number>
                <Text>of</Text>
                <Number>{numberOfPages}</Number>
            </PageNumberContainer>
            <PagerButton disabled={isLastPage()}>
                Next
                <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
            </PagerButton>
            <PagerButton disabled={isLastPage()}>
                Last
                <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
            </PagerButton>
        </Wrapper>
    );
};

export default Pager;