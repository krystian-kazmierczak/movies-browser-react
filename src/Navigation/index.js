import {
  NavigationContainer,
  LogoWrapper,
  Logo,
  SearchWrapper,
  List,
  Item,
  StyledNavLink,
  NavigationWrapper,
  HeaderWrapper,
  Title,
} from "./styled";
import logo from "../assets/logo.svg";
import { Search } from "../features/Search";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationWrapper>
        <HeaderWrapper>
          <LogoWrapper>
            <Logo src={logo} alt="" />
            <Title>movies&nbsp;browser</Title>
          </LogoWrapper>
          <List>
            <Item>
              <StyledNavLink to="/movies">movies</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to="/people">people</StyledNavLink>
            </Item>
          </List>
        </HeaderWrapper>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
      </NavigationWrapper>
    </NavigationContainer>
  );
};
