import styled from "styled-components";
import { Arrow } from "../Button";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 16px 16px 16px;
`;

export const SecondArrow = styled(Arrow)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: unset;
  }
`;

export const PageNumberContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(4,auto);
  margin: 0 24px 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-gap: 2px;
    margin: 0 8px 0 0;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 10px;
  }
`;

export const Number = styled(Text)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.woodsmoke};
`;