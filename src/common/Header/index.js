import styled from "styled-components";

export const Header = styled.h2`
  margin: 64px 15px 24px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
    margin: 24px 0 16px 0;
  }
`;