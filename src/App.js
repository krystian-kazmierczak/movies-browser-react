import { HashRouter } from "react-router-dom";
import { Navigation } from "./Navigation";
import { MainContainer } from "./styled";
import Cover from "./common/Cover";
import MoviePage from "./features/MoviePage";
import MoviesPage from "./features/MoviesPage";
import PeoplePage from "./features/PeoplePage";
import Pagination from "./common/Pagination/index";

export const App = () => (
  <HashRouter>
    <Navigation />
    <Cover />
    <MainContainer>
      <MoviePage />
      <MoviesPage />
      <PeoplePage />
    </MainContainer>
    <Pagination/>
  </HashRouter>
);
