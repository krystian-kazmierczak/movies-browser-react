import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  min-height: 94px;
  padding: 23px 10px 23px 20px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-bottom: 0;
  }
`;

export const NavigationLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationRightWrapper = styled.div`
  padding: 23px;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  text-decoration: none;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  margin: 0 10px;
  padding: 13px 24px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: 33px;
  transition: 0.5s;

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
    margin: 0 3px;
    padding: 10px 17px;
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0 8px;
    padding: 8px 12px;
    font-size: 12px;
  }
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  margin: 0;
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
    margin-right: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-right: 22px;
    padding: 10px;
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-right: 19px;
    padding: 0;
    font-size: 13px;
  }
`;

export const Logo = styled.img`
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 20px;
  }
`;
