import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
`;

export const PagerButton = styled.button`
    padding: 8px 16px;
    margin-right: 12px;
    background-color: ${({ theme }) => theme.colors.pattensBlue};
    color: ${({ theme }) => theme.colors.woodsmoke};
    border-radius: 5px;
    font-size: 14px;
    line-height: 20px;
    border: none;
    display: grid;
    grid-template-columns: repeat(2,auto);
    grid-gap: 8px;
    align-items: center;
    
    &:disabled {
        background-color: ${({ theme }) => theme.colors.cornsilk};
        color: ${({ theme }) => theme.colors.woodsmoke};
    }
`;

export const Arrow = styled.img`
    width: 7px;
    height: 11px;
`;

export const PageNumberContainer = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(4,auto);
    margin: 0 24px 0 12px;
`;

export const Text = styled.span`
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.waterloo};
`;

export const Number = styled(Text)`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.woodsmoke};
`;