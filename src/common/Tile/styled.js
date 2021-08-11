import styled, { css } from "styled-components";

export const Tile = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    padding: 16px;
    display: grid;
    grid-template-columns: auto 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-column-gap: 16px;
    }

    ${({ big }) => big && css`
        padding: 40px;
        grid-column-gap: 40px;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
            padding: 16px;
        }
    `}
    
    ${({ medium }) => medium && css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 324px;
        height: 650px;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
            width: 100%;
            height: 201px;
            display: grid;
        }
    `}

    ${({ small }) => small && css`
        width: 208px;
        height: 339px;
        text-align: center;
        grid-template-columns: auto;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
            width: 100%;
            max-width: 136px;
            height: 245px;
            padding: 8px;
        }
    `}
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
    border-radius: 5px;
    margin-bottom: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 114px;
        height: 169px;
    }

    ${({ medium }) => medium && css`
        width: 292px;
        height: 434px;
    `}

    ${({ small }) => small && css`
        width: 176px;
        height: 231px;
        margin-bottom: 0;
    `}
`;

export const Content = styled.div``;

export const Title = styled.header`
    font-weight: 500;
    font-size: 36px;
    margin: 8px 0 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 16px;
        line-height: 21px;
        color: ${({ theme }) => theme.colors.woodsmoke};
        margin: 0 0 4px 0;
    }

    ${({ big }) => big && css`
        font-weight: 600;
    `}

    ${({ medium }) => medium && css`
        font-size: 22px;
        line-height: 29px;
        margin: 0 0 8px 0;
    `}

    ${({ small }) => small && css`
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

export const Subtitle = styled.div`
    font-size: 22px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 13px;
        line-height: 17px;
        margin-bottom: 8px;
    }

    ${({ big }) => big && css`
        color: ${({ theme }) => theme.colors.black};
    `}

    ${({ medium }) => medium && css`
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
    `}

    ${({ small }) => small && css`
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

    ${({ medium }) => medium && css`
        margin: 4px;
    `}
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 14px;
        line-height: 22px;
        margin: 16px 0;
        grid-column: 1 /span 2;
    }
`;