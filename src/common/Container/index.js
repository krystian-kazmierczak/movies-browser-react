import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 0 16px;
  }
`;