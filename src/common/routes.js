export const toMovies = () => "/movies";
export const toPeople = () => "/people";
export const toError = () => "/error";

export const toMovie = ({ id } = { id: ":id" }) => `/movie/${id}`;
export const toProfile = ({ id } = { id: ":id" }) => `/person/${id}`;