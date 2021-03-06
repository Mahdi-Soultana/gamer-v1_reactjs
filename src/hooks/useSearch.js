import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { GamesSearchUrl } from "../BaseURL";
import { useSelector } from "react-redux";
function useSearch() {
  const term = useSelector((state) => state.search.term);
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
      cacheTime: 0,
    },
  );

  useEffect(() => {
    if (term) {
      setInput(term);
    }
  }, [term]);

  useEffect(() => {
    let load;
    let time;
    if (input.length >= 2) {
      setLoading(true);
      load = setTimeout(() => {
        setLoading(false);
      }, 1300);
      time = setTimeout(() => {
        setNumber(4);
        setInputSearch(input);
      }, 1200);
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
    number,
  };
}

export default useSearch;
