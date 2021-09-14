import {
  NavigationContainer,
  SearchWrapper,
  NavigationWrapper,
  HeaderWrapper,
} from "./styled";
import { Search } from "../../../features/Search";
import { Header } from "./Header";
import { Link } from "./Link";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationWrapper>
        <HeaderWrapper>
          <Header />
          <Link />
        </HeaderWrapper>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
      </NavigationWrapper>
    </NavigationContainer>
  );
};
