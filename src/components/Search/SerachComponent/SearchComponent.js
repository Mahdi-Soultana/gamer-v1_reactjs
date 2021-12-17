import React from "react";
import PopularGameList from "../../styledComponents/PopularGameList";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GamesSearchUrl } from "../../../BaseURL";
const fetchData = async (url) => {
  let data = await fetch(url).then((res) => {
    return res.json();
  });

  return data;
};
function SearchComponent({ data: initialData, search }) {
  const initialURL = GamesSearchUrl(search + "&page_size=6&ordering=-rating");

  const { data, hasNextPage, isFetched, fetchNextPage, isLoading } =
    useInfiniteQuery(
      "game-infinite",
      ({ pageParam = initialURL }) => fetchData(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined,
        cacheTime: 0,
        refetchOnMount: true,
      },
    );
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!isFetched) {
    return <h1>isFetched...</h1>;
  }

  return (
    <InfiniteScroll
      loadMore={fetchNextPage}
      hasMore={hasNextPage}
      threshold={3600}
      loader={
        <div className="loader" key={0}>
          <h2>Loading ...</h2>
        </div>
      }
    >
      <PopularGameList
        // data={data}
        pages={data}
        name={"Search term  : " + search}
      />
    </InfiniteScroll>
  );
}

export default SearchComponent;
