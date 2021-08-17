export const getGenreNames = (genre_ids, genres) => {
    if (genre_ids.length > 0) {
        const string = genre_ids.map(tag => `${genres.find(({ id }) => id === tag).name}`).join(",");
        return string.split(",");
    }
};