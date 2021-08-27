export const getGenresNames = (genre_ids, genres) => {
  if (genre_ids.length > 0) {
    return genre_ids.map((tag) => genres.find(({ id }) => id === tag).name);
  }
};
