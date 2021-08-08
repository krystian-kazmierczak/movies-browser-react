import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "link-active";

export const NavigationContainer = styled.nav`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding: 23px 16px;
  min-height: 94px;
`;

export const NavigationWrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 32px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

export const NavigationLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationRightWrapper = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0 16px;
  list-style: none;
`;

export const Item = styled.li`
  text-decoration: none;
  text-transform: uppercase;
  padding-left: 16px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
  padding: 14px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: 24px;
  transition: 0.5s;
  outline: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
  }

  &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.colors.white};
    cursor: unset;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: unset;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    border-radius: 27px;
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    border-radius: 29px;
    font-size: 12px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 16px;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.7;
  letter-spacing: -1.5px;
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    letter-spacing: -1px;
    line-height: 1.5;
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    line-height: 1.3;
    letter-spacing: -0.5px;
    font-size: 13px;
  }
`;

export const Logo = styled.img`
  height: 40px;
  padding: 0 16px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 30px;
    padding: 0 10px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 20px;
    padding: 0 4px 0 0;
  }
`;
