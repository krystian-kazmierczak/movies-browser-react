import { useSelector } from "react-redux";
import { apiImage, apiKey } from "../../../common/commonValues";
import { Header } from "../../../common/Container";
import { BigTile } from "../../../common/Tile/BigTile";
import { selectAdditionalData, selectItemData, toggleShowMore } from "../../../features/itemSlice";
import noProfile from "../../../assets/noProfile.svg";
import Section from "../../../common/Section";

const ProfileDetails = () => {
  const movieAdditionalData = useSelector(selectAdditionalData);
  const personData = useSelector(selectItemData);

  return (
    <>
      <BigTile
        profile="true"
        title={personData.name}
        birthDay={personData.birthday}
        placeOfBirth={personData.place_of_birth}
        description={personData.biography}
        src={
          !!personData.profile_path
            ? `${apiImage}/w200${personData.profile_path}?api_key=${apiKey}`
            : noProfile
        }
      />
      {!!movieAdditionalData.cast && movieAdditionalData.cast.length > 0 && (
        <>
          <Header>
            Movies - Cast{`(${movieAdditionalData.cast.length})`}
          </Header>
          <Section
            profileDetails={true}
          />

        </>
      )}
      {!!movieAdditionalData.crew && movieAdditionalData.crew.length > 0 && (
        <>
          <Header>
            Movies - Crew {`(${movieAdditionalData.crew.length})`}{" "}
          </Header>
          <Section
            profileDetails={true}
            crew={true}
          />

        </>
      )}
    </>
  );
};

export default ProfileDetails;