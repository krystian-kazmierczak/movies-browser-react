import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 12px 0 0 0;
    }

    ${({ medium }) => medium && css`
        margin: 8px 0 0 0;
    `}

    ${({ cover }) => cover && css`
        margin: 25px 0 56px 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 16px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            display: flex;
            align-items: center;
            grid-gap: 0;
            margin: 0 0 8px 0;
        }
    `}

`;

export const RatingContainer = styled.div``;

export const Star = styled.img`
    width: 24px;
    height: 22.87px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 16px;
        height: 15.25px;
    }

    ${({ cover }) => cover && css`
        width: 40px;
        height: 38.12px;
    `}
`;

export const NumericalRating = styled.span`
    font-weight: 500;
    font-size: 22px;
    margin: 0 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 0 7px 0 8px;
        font-weight: 600;
        font-size: 13px;
        line-height: 17px;
    }

    ${({ medium }) => medium && css`
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin: 0 12px;
    `}

    ${({ cover }) => cover && css`
        font-size: 30px;
        line-height: 39px;
        color: ${({ theme }) => theme.colors.white};
        margin: 0 7px 0 8px;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            margin: 0 2px 0 4px;
        }
    `}
`;

export const Data = styled.span`
    font-size: 14px;
    margin-right: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 13px;
        line-height: 17px;
        color: ${({ theme }) => theme.colors.waterloo};
    }

    ${({ medium }) => medium && css`
        font-size: 16px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.waterloo};
    `}

    ${({ cover }) => cover && css`
        font-size: 16px;
        line-height: 19px;
        color: ${({ theme }) => theme.colors.white};

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            font-size: 10px;
            line-height: 12px;
            color: ${({ theme }) => theme.colors.white};
            margin-right: 8px;
        }
    `}


`;

export const Scale = styled(Data)`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: none;
    }

    ${({ cover }) => cover && css`
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            display: unset;
        }
    `}
`;