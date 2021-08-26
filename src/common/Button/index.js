import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  color: ${({ theme }) => theme.colors.woodsmoke};
  border-radius: 5px;
  font-size: 14px;
  line-height: 20px;
  border: none;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.cornsilk};
    color: ${({ theme }) => theme.colors.woodsmoke};
    cursor: not-allowed;
  }

  &:hover {
    filter: brightness(80%);
  }

  &:active {
    filter: brightness(90%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-gap: 4px;
    padding: 8px 12px;
    margin-right: 8px;
  }
`;

export const Label = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const Arrow = styled.img`
  width: 7px;
  height: 11px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 5px;
    height: 8px;
  }
`;