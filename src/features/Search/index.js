import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectOpen, selectQuery, setOpen, setQuery } from "./SearchSlice";
import { SearchWrapper, Input, StyledButtonSearch } from "./styled";

export const Search = () => {
  const query = useSelector(selectQuery);
  const isOpen = useSelector(selectOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchText = location.pathname.includes("movie") ? "movies" : "people";

  useEffect(() => {
    dispatch(setQuery(""));
  }, [location, dispatch]);

  const onChange = (value) => {
    dispatch(setQuery(value));
    dispatch(setOpen(true));
  };

  return (
    <SearchWrapper>
      <StyledButtonSearch />
      <Input
        placeholder={`Search for ... ${searchText}`}
        value={query}
        open={isOpen}
        onChange={({ target }) => onChange(target.value)}
      />
    </SearchWrapper>
  );
};
