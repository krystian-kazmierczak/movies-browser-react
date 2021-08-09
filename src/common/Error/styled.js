import styled from "styled-components";

export const ErrorWrapper = styled.article`
  margin-top: 96px;
  display: grid;
  justify-items: center;
  grid-gap: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mineShaft};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-gap: 24px;
  }
`;

export const Header = styled.header`
  font-weight: 700;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 22px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
  }
`;
