import React from "react";
import { PopularGamesUrl } from "../../../BaseURL";
import { usePopupalrGame } from "../../../hooks/useQueryGame";
import PopularGameList from "../../styledComponents/PopularGameList";

function PopularGame() {
  const { data, isError, isLoading } = usePopupalrGame(PopularGamesUrl);

  let content;
  if (isError) {
    content = <h1>Op's Error</h1>;
  }
  if (isLoading) {
    content = <h1>loading...</h1>;
  }
  if (data && !isLoading && !isError) {
    content = <PopularGameList data={data.results} name="Popular Game" />;
  }
  return content || <h1>Op's Error Try Again !</h1>;
}

export default PopularGame;
