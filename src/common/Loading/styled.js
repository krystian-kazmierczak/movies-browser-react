import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../assets/loadingSpinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingContainer = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  margin-top: 120px;
`;

export const StyledSpinner = styled(Spinner)`
  height: auto;
  animation: ${rotate} 1.2s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 40px;
  }
`;
