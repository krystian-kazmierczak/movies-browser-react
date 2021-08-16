import styled from "styled-components";

export const InfoDetails = styled.span`
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const InfoTitle = styled(InfoDetails)`
  color: ${({ theme }) => theme.colors.stormGray};
`;