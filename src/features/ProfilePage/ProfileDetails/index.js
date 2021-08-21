import { useSelector } from "react-redux";
import { apiImage, apiKey } from "../../../common/commonValues";
import { Header } from "../../../common/Container";
import { BigTile } from "../../../common/Tile/BigTile";
import { selectAdditionalData, selectItemData } from "../../../features/itemSlice";
import Section from "../../../common/Section";
import noProfile from "../../../assets/noProfile.svg";

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
            type="profile"
          />
        </>
      )}
      {!!movieAdditionalData.crew && movieAdditionalData.crew.length > 0 && (
        <>
          <Header>
            Movies - Crew {`(${movieAdditionalData.crew.length})`}{" "}
          </Header>
          <Section
            type="profile"
            crew={true}
          />
        </>
      )}
    </>
  );
};

export default ProfileDetails;