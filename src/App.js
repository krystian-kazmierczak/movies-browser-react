import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation";
import MoviesPage from "./features/MoviesPage";
import MoviePage from "./features/MoviePage";
import PeoplePage from "./features/PeoplePage";
import ProfilePage from "./features/ProfilePage";
import { Error } from "./common/Error";
import { toError, toMovie, toMovies, toPeople, toProfile } from "./common/routes";

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toMovie()}>
        <MoviePage />
      </Route>
      <Route path={toMovies()}>
        <MoviesPage />
      </Route>
      <Route path={toProfile()}>
        <ProfilePage />
      </Route>
      <Route path={toPeople()}>
        <PeoplePage />
      </Route>
      <Route path={toError()}>
        <Error />
      </Route>
      <Route>
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </HashRouter>
);
