import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Header } from "../../common/Container";
import Section from "../../common/Section";
import Pagination from "./../../common/Pagination/index";
import { StatusChecker } from "./../../common/StatusChecker/index";
import { NoResult } from "./../../common/NoResult";
import { pageState } from "./../../common/pageState";
import { selectGenerateList } from "./../../common/commonSlice";
import { usePageParameter } from "./../usePageParameters";
import {
  selectList,
  selectLoading,
  selectError,
  selectTotalResults,
  fetchList,
  resetState,
} from "../listSlice";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const pageNumber = +usePageParameter("page");
  const urlQuery = usePageParameter("search");
  const page = pageState(pageNumber);
  const totalResults = useSelector(selectTotalResults);
  const resultsPage = useSelector(selectList);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const generateList = useSelector(selectGenerateList);

  useEffect(() => {
    dispatch(fetchList({ page, urlQuery, type: "people" }));

    return () => resetState();
  }, [urlQuery, dispatch, generateList, page]);

  return (
    <Container>
      <StatusChecker isError={isError} isLoading={isLoading}>
        {!resultsPage.length ? (
          <NoResult urlQuery={urlQuery} />
        ) : (
          <>
            <Header>
              {urlQuery
                ? `Search results for "${urlQuery}" (${totalResults})`
                : "Popular people"}
            </Header>
            <Section type="people" />
            <Pagination />
          </>
        )}
      </StatusChecker>
    </Container>
  );
};

export default PeoplePage;
