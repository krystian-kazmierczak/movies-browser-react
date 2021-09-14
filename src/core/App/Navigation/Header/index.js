import { Logo, LogoWrapper, StyledLink, Title } from "./styled";
import logo from "./logo.svg";
import { toMovies } from "../../../../common/routes";

export const Header = () => {
  return (
    <StyledLink to={toMovies()}>
      <LogoWrapper>
        <Logo src={logo} alt="" />
        <Title>movies&nbsp;browser</Title>
      </LogoWrapper>
    </StyledLink>
  );
};
