import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  max-width: 1368px;
`;

export const SectionTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 28px;
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 20px;
    gap: 8px;
  }
`;
