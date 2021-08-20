import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  margin: 6px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
