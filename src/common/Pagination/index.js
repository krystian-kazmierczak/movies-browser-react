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
  SecondArrow,
  PaginationButton,
  Text,
  Wrapper,
  PageNumberContainer,
  Label,
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
    <Wrapper>
      <PaginationButton
        disabled={page === 1}
        onClick={() => onButtonClick(1)}
      >
        <Arrow src={page === 1 ? leftArrowGray : leftArrowBlue} alt="left arrow" />
        <SecondArrow src={page === 1 ? leftArrowGray : leftArrowBlue} alt="left arrow" />
        <Label>First</Label>
      </PaginationButton>
      <PaginationButton
        disabled={page === 1}
        onClick={() => onButtonClick(page - 1)}
      >
        <Arrow src={page === 1 ? leftArrowGray : leftArrowBlue} alt="left arrow" />
        <Label>Previous</Label>
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
        <Label>Next</Label>
        <Arrow src={page === numberOfPages ? rightArrowGray : rightArrowBlue} alt="right arrow" />
      </PaginationButton>
      <PaginationButton
        disabled={page === numberOfPages}
        onClick={() => onButtonClick(numberOfPages)}
      >
        <Label>Last</Label>
        <Arrow src={page === numberOfPages ? rightArrowGray : rightArrowBlue} alt="right arrow" />
        <SecondArrow src={page === numberOfPages ? rightArrowGray : rightArrowBlue} alt="right arrow" />
      </PaginationButton>
    </Wrapper>
  );
};

export default Pagination;
