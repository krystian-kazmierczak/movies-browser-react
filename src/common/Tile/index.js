import styled from "styled-components";

export const Tile = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
    border-radius: 5px;
`;

export const Content = styled.div``;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin: 8px 0 24px 0;
`;

export const Subtitle = styled.div`
    font-size: 22px;
    margin-bottom: 24px;
`;

export const AdditionalInfo = styled.div`
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
`;

export const InfoDetails = styled.span`
    font-size: 18px;
`;

export const InfoTitle = styled(InfoDetails)`
    color: ${({ theme }) => theme.colors.stormGray};
    margin-right: 10px;
`;

export const Tags = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: -8px;
    display: flex;
    flex-wrap: wrap;
`;

export const Tag = styled.li`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.woodsmoke};
    background-color: ${({ theme }) => theme.colors.mystic};
    padding: 8px 16px;
    margin: 8px;
    border-radius: 5px;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 32px;
`;