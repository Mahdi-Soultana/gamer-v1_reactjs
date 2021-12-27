import React from "react";

import { ListStyled } from "./CardStyled";
import PopularGame from "./PopularGame";
function PopularGameList({ data, name, pages: pagesData }) {
  if (pagesData) {
    return (
      <section className="container">
        <h1>{name}</h1>

        {pagesData?.pages && (
          <ListStyled
            className="container"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            {pagesData?.pages.map((page) =>
              page.results.map((game) => (
                <PopularGame key={game.id} game={game} />
              )),
            )}
          </ListStyled>
        )}
      </section>
    );
  }
  return (
    <section className="container">
      <h1>{name}</h1>
      {!data && <h1>No game found with this search !</h1>}
      {data && (
        <ListStyled
          className="container"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          {data.map((game) => (
            <PopularGame key={game.id} game={game} />
          ))}
        </ListStyled>
      )}
    </section>
  );
}

export default PopularGameList;
