import React from "react";
import useSearch from "../../hooks/useSearch";

import { StyledSearch } from "./StyledSearch";
import { AiOutlineLoading3Quarters, AiOutlineClose } from "react-icons/ai";
import SearchComponent from "./SerachComponent/SearchComponent";
import SearchMenu from "./SreachMenu/SearchMenu";
function Search() {
  const { setInput, data, isLoading, isError, input, setNumber } = useSearch();

  function handelSubmit(e) {
    e.preventDefault();
    if (input.length >= 2 && data.results.length) {
      setNumber(20);
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
            onChange={(e) => setInput(e.target.value)}
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
        <SearchComponent data={data.results} />
      )}
    </>
  );
}

export default Search;
