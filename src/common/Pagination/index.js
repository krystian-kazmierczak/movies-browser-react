import { BrowserView, MobileView } from "react-device-detect";
import { Number, Arrow, PaginationButton, Text, Wrapper, PageNumberContainer } from "./styled";
import leftArrowBlue from "../../assets/leftArrowBlue.svg"
import rightArrowBlue from "../../assets/rightArrowBlue.svg"
import leftArrowGray from "../../assets/leftArrowGray.svg"
import rightArrowGray from "../../assets/rightArrowGray.svg"

const Pagination = ({ numberOfPages, currentPageNumber }) => {
    const isFirstPage = () => currentPageNumber === 1;
    const isLastPage = () => currentPageNumber === numberOfPages;

    return (
        <>
            <BrowserView>
                <Wrapper>
                    <PaginationButton disabled={isFirstPage()}>
                        <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                        First
                    </PaginationButton>
                    <PaginationButton disabled={isFirstPage()}>
                        <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                        Previous
                    </PaginationButton>
                    <PageNumberContainer>
                        <Text>Page</Text>
                        <Number>{currentPageNumber}</Number>
                        <Text>of</Text>
                        <Number>{numberOfPages}</Number>
                    </PageNumberContainer>
                    <PaginationButton disabled={isLastPage()}>
                        Next
                        <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
                    </PaginationButton>
                    <PaginationButton disabled={isLastPage()}>
                        Last
                        <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
                    </PaginationButton>
                </Wrapper>
            </BrowserView>
            <MobileView>
                <Wrapper>
                    <PaginationButton disabled={isFirstPage()}>
                        <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                        <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                    </PaginationButton>
                    <PaginationButton disabled={isFirstPage()}>
                        <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                    </PaginationButton>
                    <PageNumberContainer>
                        <Text>Page</Text>
                        <Number>{currentPageNumber}</Number>
                        <Text>of</Text>
                        <Number>{numberOfPages}</Number>
                    </PageNumberContainer>
                    <PaginationButton disabled={isLastPage()}>
                        <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
                    </PaginationButton>
                    <PaginationButton disabled={isLastPage()}>
                        <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
                        <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
                    </PaginationButton>
                </Wrapper>
            </MobileView>
        </>
    );
};

export default Pagination;