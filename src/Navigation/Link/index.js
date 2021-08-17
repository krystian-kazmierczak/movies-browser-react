import { Item, List, StyledNavLink } from "./styled";


export const Link = () =>{
    return (
        <List>
          <Item>
            <StyledNavLink to="/movies">movies</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/people">people</StyledNavLink>
          </Item>
        </List>
    )
};