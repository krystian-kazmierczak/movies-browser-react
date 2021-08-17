import { BigTile } from "../../common/Tile/BigTile";
import { movieData } from "../../movieData";

const MoviePage = () => {
    return (
        <BigTile
            imageSrc={movieData.poster}
            title={movieData.title}
            subtitle={movieData.subtitle}
            info={movieData.info}
            tags={movieData.tags}
            rating={movieData.rating}
            votes={movieData.votes}
            description={movieData.description}
        />
    );
};

export default MoviePage;