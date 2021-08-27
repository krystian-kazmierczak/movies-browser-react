import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;
