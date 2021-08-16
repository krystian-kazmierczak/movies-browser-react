import { apiImage, apiKey } from "../../common/commonValues";
import { SmallTile } from "../../common/Tile/SmallTile";
import noPoster from "../../assets/noPoster.svg";
import { Container, Header, Section } from "../../common/Container";


const PeoplePage = ({ persons }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default PeoplePage;
