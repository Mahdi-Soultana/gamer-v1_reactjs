import React from "react";
import PopularGameList from "../../styledComponents/PopularGameList";

function SearchComponent({ data }) {
  return <PopularGameList data={data} name="Search" />;
}

export default SearchComponent;
