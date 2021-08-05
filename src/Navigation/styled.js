import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const Nav = styled.nav`
  display: flex;
  flex-basis: 50%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 94px;
  margin: 0 auto;
  padding: 0 10px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    min-height: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-height: 60px;
  }
`;

export const NavLeftWrapper = styled(Nav)`
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-basis: 60vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 70%;
  }
`;

export const NavRightWrapper = styled(Nav)`
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
    flex-basis: 42%;
    justify-content: center;
    padding: 16px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding-left: 0;
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
