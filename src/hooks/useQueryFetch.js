import { useMemo } from "react";

import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { normalFetch } from "../utils/fetchFn";

function useQuerFetch(nameStorage, nameQuery, BaseUrl, Action, id = "", type) {
  // let storagePopular = localStorage.getItem(nameStorage);

  // let isStoraed =
  //   storagePopular === "undefind" || storagePopular == null ? false : true;

  let { data, ...res } = useQuery(nameQuery + id, () => normalFetch(BaseUrl), {
    staleTime: 600000,
    refetchOnMount: false,
    enabled: type !== "by_ID" || type !== "Screen" ? true : !!id,
  });

  // if (type !== "by_ID") {
  //   if (!storagePopular && data) {
  //     localStorage.setItem(nameStorage, JSON.stringify(data.results));
  //   } else if (storagePopular) {
  //     data = JSON.parse(localStorage.getItem(nameStorage));
  //   }
  // }

  const dispatch = useDispatch();

  data = useMemo(() => data, [data]);

  if (data && type !== "Screen") {
    dispatch(Action(data));
  }
  return { data, ...res };
}
export default useQuerFetch;
