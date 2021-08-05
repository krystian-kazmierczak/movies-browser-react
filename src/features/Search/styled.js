import styled from "styled-components";
import searchIcon from "../../assets/search-icon.svg";

export const Input = styled.input`
  height: 48px;
  width: 432px;
  border: 1px solid ${({ theme }) => theme.colors.cornsilk};
  border-radius: 24px;
  padding: 0 0 0 64px;
  background: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
  }
`;

export const SearchWrapper = styled.form`
  position: relative;
`;

export const StyledButtonSearch = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 24px;
  top: 50%;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 24px;
  background-color: transparent;
  background-position: center;
  border: none;
  transform: translateY(-50%);
  cursor: pointer;
`;
