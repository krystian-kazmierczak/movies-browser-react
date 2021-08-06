import styled from "styled-components";

export const Tile = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        padding: 16px;
        grid-column-gap: 16px;
    }
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 114px;
        height: 169px;
    }
`;

export const Content = styled.div``;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin: 8px 0 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: ${({ theme }) => theme.colors.woodsmoke};
        margin: 0 0 4px 0;
    }
`;

export const Subtitle = styled.div`
    font-size: 22px;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 13px;
        line-height: 17px;
        color: ${({ theme }) => theme.colors.waterloo};
        margin-bottom: 8px;
    }
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