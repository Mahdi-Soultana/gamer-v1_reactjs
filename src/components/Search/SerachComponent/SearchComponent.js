import React from "react";
import PopularGameList from "../../styledComponents/PopularGameList";

function SearchComponent({ data, search }) {
  return <PopularGameList data={data} name={"Search term  : " + search} />;
}

export default SearchComponent;
