import { SearchWrapper, Input, StyledButtonSearch } from "./styled";

export const Search = () => {
  return (
    <SearchWrapper>
      <StyledButtonSearch />
      <Input placeholder={`Search for ...`} />
    </SearchWrapper>
  );
};
