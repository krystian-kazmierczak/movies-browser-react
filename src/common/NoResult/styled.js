import styled from "styled-components";
import { ReactComponent as PlaneImage } from "./planeNoResult.svg";

export const HeaderText = styled.header`
  margin: 56px 0 24px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
    margin: 42px 0 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 24px 0 12px;
    margin: 16px;
    font-size: 18px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  height: 100vh;
`;

export const StyledImage = styled(PlaneImage)`
  height: auto;
  width: 50%;
  max-width: 400px;
  text-align: center;
`;
