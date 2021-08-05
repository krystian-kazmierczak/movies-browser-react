import { HashRouter } from "react-router-dom";
import { Navigation } from "./Navigation";
import { MainContainer } from "./styled";

export const App = () => (
  <HashRouter>
    <Navigation />
    <MainContainer>{/* main content here */}</MainContainer>
  </HashRouter>
);
