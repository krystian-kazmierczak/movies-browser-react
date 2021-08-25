import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { toMovie } from "../../common/routes";
import { StyledLink } from "../../common/StyledLink";
import { MediumTile } from "../../common/Tile/MediumTile";
import Pagination from "./../../common/Pagination/index";
import { StatusChecker } from "./../../common/StatusChecker/index";
import { Container, Header, Section } from "./../../common/Container/index";
import { NoResult } from "./../../common/NoResult";
import { pageState } from "./../../common/pageState";
import { selectGenresList } from "./../../common/commonSlice";
import { usePageParameter } from "./../usePageParameters";
import { apiImage, apiKey } from "../../common/commonValues";
import noPoster from "../../assets/noPoster.svg";
import { getGenresNames } from "../getGenresNames";
import { getYearFromDate } from "../getYearFromDate";
import {
  selectList,
  selectLoading,
  selectError,
  selectTotalResults,
  fetchList,
  resetState,
} from "../listSlice";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const pageNumber = +usePageParameter("page");
  const urlQuery = usePageParameter("search");
  const page = pageState(pageNumber);
  const totalResults = useSelector(selectTotalResults);
  const resultsPage = useSelector(selectList);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const genres = useSelector(selectGenresList);

  useEffect(() => {
    dispatch(fetchList({ page, urlQuery, type: "movies" }));

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
                : "Popular Movies"}
            </Header>
            <Section>
              {resultsPage.map((movie) => (
                <StyledLink key={nanoid()} to={toMovie({ id: movie.id })}>
                  <MediumTile
                    key={movie.id}
                    src={
                      !!movie.poster_path
                        ? `${apiImage}/w200${movie.poster_path}?api_key=${apiKey}`
                        : noPoster
                    }
                    title={movie.title}
                    subtitle={
                      !!movie.release_date
                        ? getYearFromDate(movie.release_date)
                        : ""
                    }
                    tags={
                      !!movie.genre_ids
                        ? getGenresNames(movie.genre_ids, genres)
                        : []
                    }
                    rating={movie.vote_average}
                    votes={movie.vote_count}
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

export default MoviesPage;
