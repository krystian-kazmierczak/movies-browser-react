import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 54px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}px){
    margin-bottom: 12px;
  }
`;

export const StyledSection = styled.section`
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
`;