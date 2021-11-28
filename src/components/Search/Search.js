import useSearch from "../../hooks/useSearch";
import React, { useState } from "react";

import { StyledSearch } from "./StyledSearch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Search() {
  const { setInput, data, isLoading, isError, input, setNumber } = useSearch();

  console.log(data);
  function handelSubmit(e) {
    e.preventDefault();

    if (input.length >= 3 && data.results.length) {
      setNumber(20);
    } else {
      console.log("handel empty value !!!!!!!!");
    }
  }
  return (
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
      </div>
      <button type="submit">Search</button>
    </StyledSearch>
  );
}

export default Search;
