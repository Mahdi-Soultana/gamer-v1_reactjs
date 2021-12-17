import React from "react";
import { useNewGame } from "../../../hooks/useQueryGame";
import PopularGameList from "../../styledComponents/PopularGameList";

function NewGames() {
  const { data, isError, isLoading } = useNewGame();

  let content;
  if (isError) {
    content = <h1>Op's Error</h1>;
  }
  if (isLoading) {
    content = <h1>loading...</h1>;
  }
  if (data && !isLoading && !isError) {
    content = <PopularGameList data={data.results} name="NewGames" />;
  }
  return content || <h1>Op's Error Try Again !</h1>;
}

export default NewGames;
