import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { apiImage, apiKey } from "../../../common/commonValues";
import { SmallTile } from "../../../common/Tile/SmallTile";
import { Header, Section } from "../../../common/Container/index";
import noProfile from "../../../assets/noProfile.svg";
import { selectAdditionalData } from "../../itemSlice";

const MovieDetails = () => {
    const movieAdditionalData = useSelector(selectAdditionalData);

    return (
        <>
            <Header>Cast</Header>
            <Section>
                {movieAdditionalData.cast.map((person) => (
                    <SmallTile
                        key={nanoid()}
                        src={
                            !!person.profile_path
                                ? `${apiImage}/w500${person.profile_path}?api_key=${apiKey}`
                                : noProfile
                        }
                        title={person.name}
                        subtitle={person.character}
                    />
                ))}
            </Section>
            <Header>Crew</Header>
            <Section>
                {movieAdditionalData.crew.map((person) => (
                    <SmallTile
                        key={nanoid()}
                        src={
                            !!person.profile_path
                                ? `${apiImage}/w500${person.profile_path}?api_key=${apiKey}`
                                : noProfile
                        }
                        title={person.name}
                        subtitle={person.job}
                    />
                ))}
            </Section>
        </>
    );
};

export default MovieDetails;