import { MediumTile } from "../../common/Tile/MediumTile";
import { movieData } from "../../movieData";

const MoviesPage = () => {
    return (
        <MediumTile
            imageSrc={movieData.poster}
            title={movieData.title}
            subtitle={movieData.subtitle}
            tags={movieData.tags}
            rating={movieData.rating}
            votes={movieData.votes}
        />
    );
};

export default MoviesPage;