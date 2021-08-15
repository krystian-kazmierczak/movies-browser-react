import {
  AdditionalInfo,
  Content,
  Description,
  Image,
  InfoDetails,
  InfoTitle,
  Tile,
  Title,
} from "../../../common/Tile/styled";

export const BigTile = ({
  name,
  birthDay,
  placeOfBirth,
  description,
  poster,
}) => (
  <Tile big>
    <Image src={poster} />
    <Content>
      <Title big>{name}</Title>
      <AdditionalInfo>
        <InfoDetails>
          <InfoTitle>Date of bird:</InfoTitle> {birthDay}
        </InfoDetails>
        <InfoDetails>
          <InfoTitle>Place of bird</InfoTitle>{placeOfBirth}
        </InfoDetails>
      </AdditionalInfo>
    </Content>
    <Description>{description}</Description>
  </Tile>
);
