import {
  NavigationContainer,
  LogoWrapper,
  Logo,
  NavigationLeftWrapper,
  NavigationRightWrapper,
  List,
  Item,
  StyledNavLink,
  NavigationWrapper,
} from "./styled";
import logo from "../assets/logo.svg";
import { Search } from "../features/Search";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationWrapper>
        <NavigationLeftWrapper>
          <LogoWrapper>
            <Logo src={logo} alt="" />
            movies&nbsp;browser
          </LogoWrapper>
          <List>
            <Item>
              <StyledNavLink to="/movies">movies</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to="/people">people</StyledNavLink>
            </Item>
          </List>
        </NavigationLeftWrapper>
        <NavigationRightWrapper>
          <Search />
        </NavigationRightWrapper>
      </NavigationWrapper>
    </NavigationContainer>
  );
};
