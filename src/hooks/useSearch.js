import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { GamesSearchUrl } from "../BaseURL";

function useSearch() {
  const [number, setNumber] = useState(4);
  const [input, setInput] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [isLoading, setLoading] = useState(false);

  let { data, isError } = useQuery(
    "search:" + number + inputSearch,
    async () => {
      let data = await fetch(
        GamesSearchUrl(
          inputSearch + "&page_size=" + number + "&ordering=-rating",
        ),
      ).then((res) => {
        return res.json();
      });

      return data;
    },
    {
      enabled: !!inputSearch,
    },
  );
  useEffect(() => {
    let load;
    let time;
    if (input.length >= 3) {
      setLoading(true);
      load = setTimeout(() => {
        setLoading(false);
      }, 1200);
      time = setTimeout(() => {
        setNumber(4);
        setInputSearch(input);
      }, 1300);
    } else {
      setLoading(false);
    }
    return () => {
      clearTimeout(time);
      clearTimeout(load);
    };
  }, [input]);

  return {
    input,
    setInput,
    data,
    isLoading,
    isError,
    setNumber,
  };
}

export default useSearch;
