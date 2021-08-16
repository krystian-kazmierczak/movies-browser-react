import { apiImage, apiKey } from "../../common/commonValues";
import { SmallTile } from "../../common/Tile/SmallTile";
import noPoster from "../../assets/noPoster.svg";
import { Header, Section } from "./styled";

const PeoplePage = ({ persons }) => {
  return (
    <>
      <Header>Popular people</Header>
      <Section>
        {persons.map((person) => (
          <SmallTile
            src={
              !!person.profile_path
                ? `${apiImage}/w500${person.profile_path}?api_key=${apiKey}`
                : noPoster
            }
            title={person.name}
          />
        ))};
      </Section>
    </>
  );
};

export default PeoplePage;
