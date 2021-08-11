import { HashRouter } from "react-router-dom";
import { Navigation } from "./Navigation";
import { MainContainer } from "./styled";
import ProfilePage from "./features/ProfilePage";
import { exampleData } from "./features/ProfilePage/exampleData";
import { apiImage, apiKey } from "./common/commonValues";

const data = exampleData;

const imageApi = apiImage+"/w500"+data.profile_path+"?api_key="+apiKey

export const App = () => (
  <HashRouter>
    <Navigation />
    <MainContainer>
      <ProfilePage name={data.name} birthDay={data.birthday} placeOfBirth={data.place_of_birth} description={data.biography} poster={imageApi}/>
    </MainContainer>
  </HashRouter>
);
