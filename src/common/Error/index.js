import { Header, Paragraph, ErrorWrapper } from "./styled";
import { ReactComponent as WarningIcon } from "../../assets/error.svg";
import { ButtonLink } from "./ButtonLink";

export const Error = () => (
  <ErrorWrapper>
    <WarningIcon />
    <Header>Oooops! Something went&nbsp;wrong...</Header>
    <Paragraph>
      Please, check your network connection <br />
      and try again
    </Paragraph>
    <ButtonLink to="/movies">Back to Homepage</ButtonLink>
  </ErrorWrapper>
);
