export const getGenreNames = (genre_ids, genres) => {
    const string = genre_ids.map(tag => `${ genres.find(({ id }) => id === tag).name}`).join(",");
    return string.split(",");
};