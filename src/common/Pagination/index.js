import { BrowserView, MobileView } from "react-device-detect";
import { useState } from "react";
import { Number, Arrow, PaginationButton, Text, Wrapper, PageNumberContainer } from "./styled";
import leftArrowBlue from "../../assets/leftArrowBlue.svg"
import rightArrowBlue from "../../assets/rightArrowBlue.svg"
import leftArrowGray from "../../assets/leftArrowGray.svg"
import rightArrowGray from "../../assets/rightArrowGray.svg"

const Pagination = ({ numberOfPages }) => {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const isFirstPage = () => currentPageNumber === 1;
    const isLastPage = () => currentPageNumber === numberOfPages;
    const switchToNextPage = () => setCurrentPageNumber(currentPageNumber+1);
    const switchToPreviousPage = () => setCurrentPageNumber(currentPageNumber-1);
    const switchToFirstPage = () => setCurrentPageNumber(1);
    const switchToLastPage = () => setCurrentPageNumber(numberOfPages);

    return (
        <>
            <BrowserView>
                <Wrapper>
                    <PaginationButton disabled={isFirstPage()} onClick={switchToFirstPage}>
                        <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                        First
                    </PaginationButton>
                    <PaginationButton disabled={isFirstPage()} onClick={switchToPreviousPage}>
                        <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                        Previous
                    </PaginationButton>
                    <PageNumberContainer>
                        <Text>Page</Text>
                        <Number>{currentPageNumber}</Number>
                        <Text>of</Text>
                        <Number>{numberOfPages}</Number>
                    </PageNumberContainer>
                    <PaginationButton disabled={isLastPage()} onClick={switchToNextPage}>
                        Next
                        <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
                    </PaginationButton>
                    <PaginationButton disabled={isLastPage()} onClick={switchToLastPage}>
                        Last
                        <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
                    </PaginationButton>
                </Wrapper>
            </BrowserView>
            <MobileView>
                <Wrapper>
                    <PaginationButton disabled={isFirstPage()} onClick={switchToFirstPage}>
                        <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                        <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                    </PaginationButton>
                    <PaginationButton disabled={isFirstPage()} onClick={switchToPreviousPage}>
                        <Arrow src={isFirstPage() ? leftArrowGray : leftArrowBlue} alt="left arrow" />
                    </PaginationButton>
                    <PageNumberContainer>
                        <Text>Page</Text>
                        <Number>{currentPageNumber}</Number>
                        <Text>of</Text>
                        <Number>{numberOfPages}</Number>
                    </PageNumberContainer>
                    <PaginationButton disabled={isLastPage()} onClick={switchToNextPage}>
                        <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
                    </PaginationButton>
                    <PaginationButton disabled={isLastPage()} onClick={switchToLastPage}>
                        <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
                        <Arrow src={isLastPage() ? rightArrowGray : rightArrowBlue} alt="right arrow" />
                    </PaginationButton>
                </Wrapper>
            </MobileView>
        </>
    );
};

export default Pagination;