import styled from "styled-components";

export const Header = styled.h1`
  margin: 56px 0 24px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
    margin: 8px 0 12px 0;
  }
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4,auto);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;