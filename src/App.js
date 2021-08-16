import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation";
import { MainContainer } from "./styled";
import ProfilePage from "./features/ProfilePage";
import MoviesPage from "./features/MoviesPage";
import PeoplePage from "./features/PeoplePage";
import { Error } from "./common/Error";
import { apiImage, apiKey } from "./common/commonValues";
import {
  examplePerson as data,
  exampleMovieCredits as movies,
  popularPerson as popular
} from "./exampleData";

const imageApi = `${apiImage}/w500${data.profile_path}?api_key=${apiKey}`;

export const App = () => (<>
  <HashRouter>
    <Navigation />
    <MainContainer>
      <Switch>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/people">
          <PeoplePage persons={popular.results}/>
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </MainContainer>
  </HashRouter>
  <ProfilePage
  name={data.name}
  birthDay={data.birthday}
  placeOfBirth={data.place_of_birth}
  description={data.biography}
  poster={imageApi}
  cast={movies.cast}
  crew={movies.crew}/>
  </>
);
