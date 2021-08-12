import { SmallTile } from "../../common/Tile/SmallTile";
import { personData } from "../../personData";

const PeoplePage = () => {
    return (
        <SmallTile
            imageSrc={personData.poster}
            title={personData.title}
            subtitle={personData.subtitle}
        />
    );
};

export default PeoplePage;