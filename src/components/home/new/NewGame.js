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
  if (data) {
    content = <PopularGameList data={data.results} name="NewGames" />;
  }
  return content;
}

export default NewGames;
