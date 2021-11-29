import React, { useState, useEffect } from "react";
import useSearch from "../../hooks/useSearch";

import { StyledSearch } from "./StyledSearch";
import { AiOutlineLoading3Quarters, AiOutlineClose } from "react-icons/ai";
import SearchComponent from "./SerachComponent/SearchComponent";
import SearchMenu from "./SreachMenu/SearchMenu";
function Search() {
  const { setInput, data, isLoading, isError, input, setNumber } = useSearch();
  const [showMenuSearch, setShowMenuSearch] = useState(false);

  function handelSubmit(e) {
    e.preventDefault();
    setShowMenuSearch(false);
    if (input.length >= 3 && data.results.length) {
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
        {input.length >= 3 && data?.results.length <= 4 && !isLoading && (
          <SearchMenu data={data.results} />
        )}
        <button type="submit">Search</button>
      </StyledSearch>

      {input.length >= 3 && data?.results.length > 4 && !isLoading && (
        <SearchComponent data={data.results} />
      )}
    </>
  );
}

export default Search;
