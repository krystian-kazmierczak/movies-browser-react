import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  AdditionalInfo,
  Content,
  Description,
  Image,
  Tile,
  Title,
} from "../../../common/Tile/styled";
import { InfoDetails, InfoTitle } from "./styled";
import { Container } from "./../../../common/Container/index";
import { StatusChecker } from "./../../../common/StatusChecker/index";
import {
  selectItemData,
  selectLoading,
  selectError,
  fetchItem,
  resetState,
} from "./../../itemSlice";
import noProfile from "../../../assets/noProfile.svg";
import { apiImage, apiKey } from "./../../../common/commonValues";

export const BigTile = () => {
   const isLoading = useSelector(selectLoading);
   const isError = useSelector(selectError);
   const person = useSelector(selectItemData);
   const dispatch = useDispatch();
   const { id } = useParams();

   useEffect(() => {
    dispatch(fetchItem({ id, type: "person" }));

    return () => resetState();
}, [id, dispatch]);

  return (
    <Container>
      <StatusChecker isLoading ={isLoading} isError={isError}>
        <>
        <Tile big>
          <Image src={person.profile_path
                      ? `${apiImage}/w500${person.profile_path}?api_key=${apiKey}`
                      : noProfile} />
          <Content>
            <Title big>{person.name}</Title>
            <AdditionalInfo>
              <InfoDetails>
                <InfoTitle>
                  {window.innerWidth > 766 ? "Date of bird:" : "Bird:"}
                </InfoTitle>{" "}
                {person.birthday}
              </InfoDetails>
              <InfoDetails>
                <InfoTitle>
                  {window.innerWidth > 766 ? "Place of bird:" : ""}{" "}
                </InfoTitle>
                {person.place_of_birth}
              </InfoDetails>
            </AdditionalInfo>
          </Content>
          <Description>{person.biography}</Description>
        </Tile>
        </>
      </StatusChecker>
    </Container>
  );
};
