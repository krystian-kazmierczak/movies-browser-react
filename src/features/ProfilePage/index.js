import { isMobileOnly } from "react-device-detect";
import {
  AdditionalInfo,
  Content,
  Description,
  Image,
  InfoDetails,
  InfoTitle,
  Tile,
  Title,
} from "../../common/Tile";

const ProfilePage = ({ name, birthDay, placeOfBirth, description, poster }) => {
  if (isMobileOnly) {
    return (
      <Tile big>
        <Image src={poster} />
        <Content>
          <Title big>{name}</Title>
          <AdditionalInfo>
            <InfoDetails>
              <InfoTitle>Date of bird:</InfoTitle>
              {birthDay}
            </InfoDetails>
            <InfoDetails>
              <InfoTitle>Place of bird:</InfoTitle>
              {placeOfBirth}
            </InfoDetails>
          </AdditionalInfo>
        </Content>
        <Description>
          {description}
        </Description>
      </Tile>
    );
  }
  return (
    <Tile big>
      <Image src={poster} />
      <Content>
        <Title big>{name}</Title>
        <AdditionalInfo>
            <InfoDetails>
              <InfoTitle>Date of bird:</InfoTitle>
              {birthDay}
            </InfoDetails>
            <InfoDetails>
              <InfoTitle>Place of bird:</InfoTitle>
              {placeOfBirth}
            </InfoDetails>
          </AdditionalInfo>
        <Description>
        {description}
        </Description>
      </Content>
    </Tile>
  );
};

export default ProfilePage;
