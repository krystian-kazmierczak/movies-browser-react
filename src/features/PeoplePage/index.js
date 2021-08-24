import { SmallTile } from "../../common/Tile/SmallTile";
import { Container, Header, Section } from "../../common/Container";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { toProfile } from "../../common/routes";
import { StyledLink } from "../../common/StyledLink";
import Pagination from "./../../common/Pagination/index";
import { StatusChecker } from "./../../common/StatusChecker/index";
import { NoResult } from "./../../common/NoResult";
import { pageState } from "./../../common/pageState";
import { usePageParameter } from "./../usePageParameters";
import { apiImage, apiKey } from "../../common/commonValues";
import noProfile from "../../assets/noProfile.svg";
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

  useEffect(() => {
    dispatch(fetchList({ page, urlQuery, type: "people" }));

    return () => resetState();
  }, [urlQuery, dispatch, page]);

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
            <Section>
              {resultsPage.map((person) => (
                   <StyledLink key={nanoid()} to={toProfile({ id: person.id })}>
                <SmallTile
                  key={person.id}
                  src={
                    !!person.profile_path
                      ? `${apiImage}/w200${person.profile_path}?api_key=${apiKey}`
                      : noProfile
                  }
                  title={person.name}
                />
                </StyledLink>
              ))}
            </Section>
            <Pagination />
          </>
        )}
      </StatusChecker>
    </Container>
  );
};

export default PeoplePage;
