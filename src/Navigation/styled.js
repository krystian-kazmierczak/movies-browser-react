import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "link-active";

export const NavigationContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding: 23px 16px;
  min-height: 94px;
/*
  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    min-height: 142px;*/
`;

export const NavigationWrapper = styled.nav`
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 12px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  flex-basis: 50%;
  margin: 0 auto;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-basis: 90vw;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 70%;
    gap: 8px;
  }
`;

export const SearchWrapper = styled.div`
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0;
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

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 0;
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

export const Title = styled.h1`
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
