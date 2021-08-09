import styled from "styled-components";

export const NavigationContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding: 23px 16px;
  min-height: 94px;
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
  justify-content: flex-start;
  flex-basis: 50%;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-basis: 90vw;
    justify-content: center;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 70%;
    gap: 8px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    justify-content: center;
  }

`;
