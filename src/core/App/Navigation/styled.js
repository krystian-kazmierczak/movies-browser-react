import styled from "styled-components";

export const NavigationContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding: 12px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 8px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 8px 8px;
  }
`;

export const NavigationWrapper = styled.nav`
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-wrap: wrap;
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
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
    justify-content: space-between;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 8px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    justify-content: center;
  }
`;
