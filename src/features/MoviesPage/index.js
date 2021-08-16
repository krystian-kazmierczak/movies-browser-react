import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MediumTile } from "../../common/Tile/MediumTile";
import Pagination from "./../../common/Pagination/index";
import { StatusChecker } from "./../../common/StatusChecker/index";
import { Container } from "./../../common/Container/index";
import { NoResult } from "./../../common/NoResult";
import { pageState } from "./../../common/pageState";
import { selectGenerateList } from "./../../common/commonSlice";
import { usePageParameter } from "./../usePageParameters";
import { Header, TilesWrapper } from "./styled";
import { apiImage, apiKey } from "../../common/commonValues";
import noPoster from "../../assets/noPoster.svg";
import { genres } from "../genres";
import { getGenreNames } from "../getGenresNames";
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
  const generateList = useSelector(selectGenerateList);

  useEffect(() => {
    dispatch(fetchList({ page, urlQuery, type: "movies" }));

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
                : "Popular Movies"}
            </Header>
            <TilesWrapper>
              {resultsPage.map((movie) => (
                <MediumTile
                  src={
                    movie.poster_path
                      ? apiImage +
                      "/w200" +
                      movie.poster_path +
                      "?api_key=" +
                      apiKey
                      : noPoster
                  }
                  title={movie.title}
                  subtitle={getYearFromDate(movie.release_date)}
                  tags={(getGenreNames(movie.genre_ids, genres))}
                  rating={movie.vote_average}
                  votes={movie.vote_count}
                />
              ))}
            </TilesWrapper>
            <Pagination />
          </>
        )}
      </StatusChecker>
    </Container>
  );
};

export default MoviesPage;
