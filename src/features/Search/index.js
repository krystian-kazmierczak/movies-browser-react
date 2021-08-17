import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectOpen, selectQuery, setOpen, setQuery } from "./SearchSlice";
import { SearchWrapper, Input, StyledButtonSearch } from "./styled";
import { DynamicBox } from "./DynamicBox/index";
import { useReplacePageParameters } from "../usePageParameters";

export const Search = () => {
  const query = useSelector(selectQuery);
  const isOpen = useSelector(selectOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchText = location.pathname.includes("movie") ? "movies" : "people";
  const replacePageParameters = useReplacePageParameters();

  useEffect(() => {
    dispatch(setQuery(""));
  }, [location, dispatch]);

  const onChange = (value) => {
    dispatch(setQuery(value));
    dispatch(setOpen(true));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    replacePageParameters([
        {
            key: "search",
            value: query,
        },
        {
            key: "page",
            value: 1,
        }
    ]);
    dispatch(setQuery(""));
};
  return (
    <SearchWrapper onSubmit={onFormSubmit}>
      <StyledButtonSearch />
      <Input
        placeholder={`Search for ${searchText} ...`}
        value={query}
        open={isOpen}
        onChange={({ target }) => onChange(target.value)}
      />
      {(query && isOpen ) && <DynamicBox query={query} />}
    </SearchWrapper>
  );
};
