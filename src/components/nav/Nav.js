import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { GamesSearchUrl } from "../../BaseURL";
import { NavStyled } from "./NavStyled/NavStyled";
function Nav() {
  const [input, setInput] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  console.log(GamesSearchUrl());
  const { data, isLoading, isError } = useQuery(
    "search:" + input,
    async () =>
      await fetch(GamesSearchUrl(inputSearch + "&page_size=4&ordering=-rating"))
        .then((res) => res.json())
        .catch((e) => console.log("ops error while search")),
    {
      enabled: !!inputSearch,
    },
  );
  useEffect(() => {
    let time = setTimeout(() => {
      setInputSearch(input);
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [input]);

  function handelSubmit(e) {
    e.preventDefault();
  }
  console.log(data?.results);
  return (
    <NavStyled>
      <h1>Gamer</h1>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="search"
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </NavStyled>
  );
}

export default Nav;
