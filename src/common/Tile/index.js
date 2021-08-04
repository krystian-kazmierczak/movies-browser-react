import styled from "styled-components";

export const Tile = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto, 1fr;
    grid-gap: 40px;
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
`;