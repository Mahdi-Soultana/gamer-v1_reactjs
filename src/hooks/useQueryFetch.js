import { useMemo } from "react";

import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { normalFetch } from "../utils/fetchFn";

function useQuerFetch(nameStorage, nameQuery, BaseUrl, Action, id = "", type) {
  let { data, ...res } = useQuery(nameQuery + id, () => normalFetch(BaseUrl), {
    staleTime: 600000,
    refetchOnMount: false,
    enabled: type !== "by_ID" || type !== "Screen" ? true : !!id,
  });

  const dispatch = useDispatch();

  data = useMemo(() => data, [data]);

  if (data && type !== "Screen") {
    dispatch(Action(data));
  }
  return { data, ...res };
}
export default useQuerFetch;
