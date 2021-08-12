import styled from "styled-components";

export const Header = styled.h1`
  margin: 56px 0 24px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.woodsmoke};
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4,auto);
  grid-gap: 24px;
`;