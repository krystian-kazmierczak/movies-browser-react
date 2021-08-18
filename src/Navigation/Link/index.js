import { toMovies, toPeople } from "../../common/routes";
import { Item, List, StyledNavLink } from "./styled";

export const Link = () => {
  return (
    <List>
      <Item>
        <StyledNavLink to={toMovies()}>movies</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to={toPeople()}>people</StyledNavLink>
      </Item>
    </List>
  )
};