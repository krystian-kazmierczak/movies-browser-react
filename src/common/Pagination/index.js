import { BrowserView, MobileView } from "react-device-detect";
import { useSelector } from "react-redux";
import { pageState } from "./../pageState";
import { selectNumberOfPages } from "../../features/listSlice";
import {
  usePageParameter,
  useReplacePageParameters,
} from "../../features/usePageParameters";
import {
  Number,
  Arrow,
  PaginationButton,
  Text,
  Wrapper,
  PageNumberContainer,
} from "./styled";
import leftArrowBlue from "../../assets/leftArrowBlue.svg";
import rightArrowBlue from "../../assets/rightArrowBlue.svg";
import leftArrowGray from "../../assets/leftArrowGray.svg";
import rightArrowGray from "../../assets/rightArrowGray.svg";

const Pagination = () => {
  const pageNumber = +usePageParameter("page");
  const page = pageState(pageNumber);
  const numberOfPages = useSelector(selectNumberOfPages);
  const replacePageParameters = useReplacePageParameters();

  const onButtonClick = (page) => {
    replacePageParameters([
      {
        key: "page",
        value: page,
      },
    ]);
  };

  return (
    <>
      <BrowserView>
        <Wrapper>
          <PaginationButton
            disabled={page === 1}
            onClick={() => onButtonClick(1)}
          >
            <Arrow src={leftArrowBlue} alt="left arrow" />
            First
          </PaginationButton>
          <PaginationButton
            disabled={page === 1}
            onClick={() => onButtonClick(page - 1)}
          >
            <Arrow src={leftArrowGray} alt="left arrow" />
            Previous
          </PaginationButton>
          <PageNumberContainer>
            <Text>Page</Text>
            <Number>{page}</Number>
            <Text>of</Text>
            <Number>{numberOfPages}</Number>
          </PageNumberContainer>
          <PaginationButton
            disabled={page === numberOfPages}
            onClick={() => onButtonClick(page + 1)}
          >
            Next
            <Arrow src={rightArrowBlue} alt="right arrow" />
          </PaginationButton>
          <PaginationButton
            disabled={page === numberOfPages}
            onClick={() => onButtonClick(numberOfPages)}
          >
            Last
            <Arrow src={rightArrowGray} alt="right arrow" />
          </PaginationButton>
        </Wrapper>
      </BrowserView>
      <MobileView>
        <Wrapper>
          <PaginationButton
            disabled={page === 1}
            onClick={() => onButtonClick(1)}
          >
            <Arrow src={leftArrowBlue} alt="left arrow" />
            <Arrow src={leftArrowBlue} alt="left arrow" />
          </PaginationButton>
          <PaginationButton
            disabled={page === 1}
            onClick={() => onButtonClick(page - 1)}
          >
            <Arrow src={leftArrowGray} alt="left arrow" />
          </PaginationButton>
          <PageNumberContainer>
            <Text>Page</Text>
            <Number>{page}</Number>
            <Text>of</Text>
            <Number>{numberOfPages}</Number>
          </PageNumberContainer>
          <PaginationButton
            disabled={page === numberOfPages}
            onClick={() => onButtonClick(page + 1)}
          >
            <Arrow src={rightArrowBlue} alt="right arrow" />
          </PaginationButton>
          <PaginationButton
            disabled={page === numberOfPages}
            onClick={() => onButtonClick(numberOfPages)}
          >
            <Arrow src={rightArrowBlue} alt="right arrow" />
            <Arrow src={rightArrowGray} alt="right arrow" />
          </PaginationButton>
        </Wrapper>
      </MobileView>
    </>
  );
};

export default Pagination;
