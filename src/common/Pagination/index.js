import { useSelector } from "react-redux";
import { pageState } from "./../pageState";
import { selectNumberOfPages } from "../../features/listSlice";
import {
  usePageParameter,
  useReplacePageParameters,
} from "../../features/usePageParameters";
import {
  Number,
  SecondArrow,
  Text,
  Wrapper,
  PageNumberContainer,
} from "./styled";
import { Arrow, Button, Label } from "../Button";
import leftArrowBlue from "./leftArrowBlue.svg";
import rightArrowBlue from "./rightArrowBlue.svg";
import leftArrowGray from "./leftArrowGray.svg";
import rightArrowGray from "./rightArrowGray.svg";

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
      <Button
        disabled={page === 1}
        onClick={() => onButtonClick(1)}
      >
        <Arrow src={page === 1 ? leftArrowGray : leftArrowBlue} alt="left arrow" />
        <SecondArrow src={page === 1 ? leftArrowGray : leftArrowBlue} alt="left arrow" />
        <Label>First</Label>
      </Button>
      <Button
        disabled={page === 1}
        onClick={() => onButtonClick(page - 1)}
      >
        <Arrow src={page === 1 ? leftArrowGray : leftArrowBlue} alt="left arrow" />
        <Label>Previous</Label>
      </Button>
      <PageNumberContainer>
        <Text>Page</Text>
        <Number>{page}</Number>
        <Text>of</Text>
        <Number>{numberOfPages}</Number>
      </PageNumberContainer>
      <Button
        disabled={page === numberOfPages}
        onClick={() => onButtonClick(page + 1)}
      >
        <Label>Next</Label>
        <Arrow src={page === numberOfPages ? rightArrowGray : rightArrowBlue} alt="right arrow" />
      </Button>
      <Button
        disabled={page === numberOfPages}
        onClick={() => onButtonClick(numberOfPages)}
      >
        <Label>Last</Label>
        <Arrow src={page === numberOfPages ? rightArrowGray : rightArrowBlue} alt="right arrow" />
        <SecondArrow src={page === numberOfPages ? rightArrowGray : rightArrowBlue} alt="right arrow" />
      </Button>
    </Wrapper>
  );
};

export default Pagination;
