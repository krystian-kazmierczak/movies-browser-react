import {
  AdditionalInfo,
  Content,
  Description,
  Image,
  Tile,
  Title,
} from "../../../common/Tile/styled";
import { InfoDetails, InfoTitle } from "./styled";

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
          <InfoTitle>
            {window.innerWidth > 766 ? "Date of bird:" : "Bird:"}
          </InfoTitle>{" "}
          {birthDay}
        </InfoDetails>
        <InfoDetails>
          <InfoTitle>{window.innerWidth > 766 ? "Place of bird:" : ""} </InfoTitle>
          {placeOfBirth}
        </InfoDetails>
      </AdditionalInfo>
    </Content>
    <Description>{description}</Description>
  </Tile>
);
