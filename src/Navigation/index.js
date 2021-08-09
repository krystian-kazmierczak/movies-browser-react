import {
  NavigationContainer,
  LogoWrapper,
  Logo,
  NavigationLeftWrapper,
  NavigationRightWrapper,
  List,
  ListItem,
  StyledNavLink,
} from "./styled";
import logo from "../assets/logo.svg";
import { Search } from "../features/Search";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationLeftWrapper>
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
      </NavigationLeftWrapper>
      <NavigationRightWrapper>
        <Search />
      </NavigationRightWrapper>
    </NavigationContainer>
  );
};
