import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto min-content auto;
  grid-template-rows: auto;
  grid-template-areas: "star rate vote";
  justify-content: start;
  align-items: center;
  grid-gap: 8px;
  margin: 23px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 10px 0 0 0;
  }

  ${({ cover }) =>
    cover &&
    css`
      grid-template-columns: auto min-content auto;
      grid-template-rows: auto auto;
      grid-template-areas:
        "star rate scale"
        "vote vote vote";
      align-items: center;
      grid-row-gap: 16px;
      margin-bottom: 56px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: auto min-content auto auto;
        grid-template-rows: auto;
        grid-template-areas: "star rate scale vote";
        margin-bottom: 8px;
      }
    `}
`;

export const Star = styled.img`
  grid-area: star;
  margin-top:-5px;
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
    height: 16px;
  }

  ${({ cover }) =>
    cover &&
    css`
      width: 40px;
      height: 40px;
    `}
`;

export const Rate = styled.p`
  grid-area: rate;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  margin:0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
    line-height: 1.3;
    margin-top:4px;
  }

  ${({ cover }) =>
    cover &&
    css`
      color: ${({ theme }) => theme.colors.white};
      font-weight: 500;
      font-size: 30px;
      line-height: 1.3;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-weight: 600;
        font-size: 14px;
      }
    `}
`;

export const Vote = styled(Rate)`
  grid-area: vote;
  color: ${({ theme }) => theme.colors.waterloo};
  font-weight: 400;

  ${({ cover }) =>
    cover &&
    css`
      color: ${({ theme }) => theme.colors.white};
      font-weight: 400;
      font-size: 16px;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
      }
    `}
`;

export const Scale = styled(Vote)`
  grid-area: scale;
  display: none;

  ${({ cover }) =>
    cover &&
    css`
      display: unset;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.2;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 10px;
        line-height: 12px;
      }
    `}
`;
