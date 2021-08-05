import { HeaderText, ImageWrapper, StyledImage } from "./styled";

export const NoResult = ({ urlQuery }) => {
  return (
    <>
      <HeaderText>
        Sorry, there are no results for
        {urlQuery ? ` "${urlQuery}".` : " your search."}
      </HeaderText>
      <ImageWrapper>
        <StyledImage />
      </ImageWrapper>
    </>
  );
};
