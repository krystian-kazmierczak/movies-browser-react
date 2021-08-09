import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.ironTransparent};
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.scienceBlue};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.anakiwa};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 15px;
  }
`;
