import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 0 16px;
  }
`;

export const Section = styled.section`
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Header = styled.h2`
  margin: 64px 0 24px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
    margin: 24px 0 16px 0;
  }
`;