import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
`;

export const PosterWrapper = styled.div`
  background: linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%), linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%), 
              url(${({ url }) => url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 770px;
  height: 40vh;
  max-width: 1368px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}px) {
    background-size: cover;
    height: 70vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    min-height: 200px;
    width: 100%;
    height: 40vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-height: 148px;
    width: 100%;
    height: 40vh;
  }
`;

export const TextWrapper = styled.div`
  max-width: 1368px;
  width: 80%;
  padding-left: 16px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 24px;
    line-height: 1.2;
  }
`;