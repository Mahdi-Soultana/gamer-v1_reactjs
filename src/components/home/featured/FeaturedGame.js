import React from "react";

import { useFeaturedGame } from "../../../hooks/useQueryGame";
import PopularGameList from "../../styledComponents/PopularGameList";

function FeaturedGame() {
  const { data, isError, isLoading } = useFeaturedGame();

  let content;
  if (isError) {
    content = <h1>Op's Error</h1>;
  }
  if (isLoading) {
    content = <h1>loading...</h1>;
  }
  if (data) {
    content = <PopularGameList data={data.results} name="Upcomming Game" />;
  }
  return content;
}

export default FeaturedGame;
