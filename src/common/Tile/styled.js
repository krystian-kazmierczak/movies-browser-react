import styled, { css } from "styled-components";

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: min-content 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-column-gap: 16px;
  }

  ${({ big }) =>
    big &&
    css`
      padding: 40px;
      grid-template-areas:
        "image content"
        "image description";
      grid-column-gap: 40px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        padding: 16px;
        grid-template-areas:
          "image content"
          "description description";
      }
    `}

  ${({ medium }) =>
    medium &&
    css`
      padding: 16px;
      width: 324px;
      min-height: 650px;
      grid-template-columns: 1fr;
      grid-template-areas:
        "image"
        "content"
        "description";

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-rows: auto 1fr;
        grid-template-columns: min-content 1fr;
        grid-template-areas:
          "image content"
          "image description";
        min-height: 200px;
        width: 100%;
        max-width: 566px;
      }
    `}

    ${({ small }) =>
    small &&
    css`
      padding: 16px;
      width: 208px;
      min-height: 339px;
      text-align: center;
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      grid-template-areas:
        "image"
        "content";
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 100%;
        max-width: 136px;
        min-height: 245px;
        padding: 8px;
      }
    `}
`;

export const Image = styled.img`
  grid-area: image;
  width: 312px;
  height: 464px;
  border-radius: 5px;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-bottom: 0;
    width: 114px;
    height: 169px;
  }

  ${({ medium }) =>
    medium &&
    css`
      width: 292px;
      height: 434px;
    `}

  ${({ small }) =>
    small &&
    css`
      width: 176px;
      height: 231px;
      margin-bottom: 0;
    `}
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 36px;
  margin: 8px 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-style: normal;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.woodsmoke};
    margin: 0 0 4px 0;
  }

  ${({ big }) =>
    big &&
    css`
      font-weight: 600;
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-size: 22px;
      line-height: 29px;
      margin: 0 0 8px 0;
    `}

    ${({ small }) =>
    small &&
    css`
      font-size: 22px;
      line-height: 29px;
      margin: 12px 0 8px 0;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 14px;
        line-height: 18px;
        margin: 8px 0;
      }
    `}
`;

export const Subtitle = styled.h3`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 8px;
  }

  ${({ big }) =>
    big &&
    css`
      color: ${({ theme }) => theme.colors.black};
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 8px;
    `}

    ${({ small }) =>
    small &&
    css`
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 0;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 0;
      }
    `}
`;

export const AdditionalInfo = styled.div`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-bottom: 8px;
  }
`;

export const InfoDetails = styled.span`
  font-size: 18px;
  line-height: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const InfoTitle = styled(InfoDetails)`
  color: ${({ theme }) => theme.colors.stormGray};
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: -8px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: -4px;
  }
`;

export const Tag = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.woodsmoke};
  background-color: ${({ theme }) => theme.colors.mystic};
  padding: 8px 16px;
  margin: 8px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 10px;
    line-height: 11px;
    padding: 4px 8px;
    margin: 4px;
  }

  ${({ medium }) =>
    medium &&
    css`
      margin: 4px;
    `}
`;

export const Description = styled.p`
  grid-area: description;
  font-size: 20px;
  line-height: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
    grid-column: 1 / span 2;
  }
`;
