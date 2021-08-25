import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "link-active";

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 16px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0;
    gap: 8px;
  }
`;

export const Item = styled.li`
  text-decoration: none;
  text-transform: uppercase;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 0;
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  padding: 14px 16px;
  border-radius: 24px;
  transition: background 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
  }

  &.${activeClassName} {
    border: 2px solid ${({ theme }) => theme.colors.white};
    cursor: unset;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: unset;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 10px 12px;
    font-size: 13px;
    border-radius: 27px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 6px 8px;
    font-size: 12px;
    border-radius: 29px;
  }
`;
