import { Container } from "./common/Container";
import Cover from "./common/Cover";
import MoviePage from "./features/MoviePage";
import MoviesPage from "./features/MoviesPage";
import PeoplePage from "./features/PeoplePage";

function App() {
  return (
    <>
      <Cover />
      <Container>
        <MoviePage />
        <MoviesPage />
        <PeoplePage />
      </Container>
    </>
  );
}

export default App;
