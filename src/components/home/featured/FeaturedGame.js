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
  if (data && !isLoading && !isError) {
    content = <PopularGameList data={data.results} name="Upcomming Game" />;
  }
  return content || <h1>Op's Error Try Again !</h1>;
}

export default FeaturedGame;
