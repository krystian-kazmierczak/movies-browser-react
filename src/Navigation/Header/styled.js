import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 8px
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 8px;
  }
`;

export const Logo = styled.img`
  height: 40px;
  padding: 0 16px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 30px;
    padding: 0 10px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 20px;
    padding: 0 4px 0 0;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.7;
  letter-spacing: -1.5px;
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    letter-spacing: -1px;
    line-height: 1.5;
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    line-height: 1.3;
    letter-spacing: -0.5px;
    font-size: 13px;
  }
`;
