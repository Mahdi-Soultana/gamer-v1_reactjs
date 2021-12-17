import React from "react";
import useSearch from "../../hooks/useSearch";
import { searchAction } from "../../redux/slices/search";
import { uiAction } from "../../redux/slices/ui";

import { StyledSearch } from "./StyledSearch";
import { AiOutlineLoading3Quarters, AiOutlineClose } from "react-icons/ai";
import SearchComponent from "./SerachComponent/SearchComponent";
import SearchMenu from "./SreachMenu/SearchMenu";
import { useDispatch } from "react-redux";
function Search() {
  const dispatch = useDispatch();
  const { setInput, data, isLoading, isError, input, setNumber } = useSearch();

  function handelSubmit(e) {
    e.preventDefault();
    if (input.length >= 2 && data?.results.length) {
      setNumber(21);
      dispatch(searchAction.setSearch(input));
      dispatch(uiAction.submitStateOpen());
    } else {
      console.log("handel empty value !!!!!!!!");
    }
  }
  return (
    <>
      <StyledSearch onSubmit={handelSubmit}>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              dispatch(uiAction.submitStateClose());

              setInput(e.target.value);
            }}
            id="search"
            autoComplete="off"
          />
          {isError && <h1>opss ther is error while fetch </h1>}
          {isLoading && <AiOutlineLoading3Quarters className="loading" />}
          {!isLoading && !!input.length && (
            <AiOutlineClose
              className="loading close"
              onClick={() => {
                setInput("");
                dispatch(searchAction.setSearch(""));
                dispatch(uiAction.submitStateClose());
              }}
            />
          )}
        </div>
        {input.length >= 1 && data?.results.length <= 4 && !isLoading && (
          <SearchMenu data={data.results} />
        )}
        <button type="submit">Search</button>
      </StyledSearch>

      {input.length >= 2 && data?.results.length > 4 && !isLoading && (
        <SearchComponent search={input} />
      )}
    </>
  );
}

export default Search;
