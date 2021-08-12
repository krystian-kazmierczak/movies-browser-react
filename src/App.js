import { HashRouter } from "react-router-dom";
import { Navigation } from "./Navigation";
import { MainContainer } from "./styled";
import MoviesPage from "./features/MoviesPage";


export const App = () => (
  <HashRouter>
    <Navigation />
    <MainContainer>
      <MoviesPage />
    </MainContainer>
  </HashRouter>
);
