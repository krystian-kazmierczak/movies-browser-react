import {
  Logo,
  LogoWrapper,
  Nav,
  NavLeftWrapper,
  NavRightWrapper,
  List,
  ListItem,
  StyledNavLink,
} from "./styled";
import logo from "../assets/logo.svg";
import { Search } from "../features/Search";

export const Navigation = () => {
  return (
    <Nav>
      <NavLeftWrapper>
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
        <List>
          <ListItem>
            <StyledNavLink to="/movies">MOVIES</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/people">PEOPLE</StyledNavLink>
          </ListItem>
        </List>
      </NavLeftWrapper>
      <NavRightWrapper>
        <Search />
      </NavRightWrapper>
    </Nav>
  );
};
