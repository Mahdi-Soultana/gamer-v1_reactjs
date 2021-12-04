import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useSearch from "../../../hooks/useSearch";
import { searchAction } from "../../../redux/slices/search";
import { detailsAction } from "../../../redux/slices/details";
import { Card, RelatedStyled } from "./styled/styled";
function Related({ name }) {
  const dispatch = useDispatch();

  const { input, number, setInput, data, isLoading, isError, setNumber } =
    useSearch();
  useEffect(() => {
    setInput(name);
    setNumber(10);
  }, [name, setInput, number]);
  console.log(number);
  return (
    <>
      <h1 style={{ padding: "0rem 3rem" }}>Related of: {name}</h1>
      <RelatedStyled>
        {isLoading ? (
          <h3>Loading ..</h3>
        ) : isError ? (
          <h3>error while loading ...</h3>
        ) : (
          data?.results &&
          data?.results.map((game) => (
            <Card
              title={game.name}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              whileTap={{
                y: 4,
                scale: 0.7,
                transition: {
                  duration: 0.2,
                  type: "spring",
                },
              }}
              key={game.id}
              url={game.background_image}
              onClick={() => {
                dispatch(searchAction.setSearch(game.name));
                dispatch(detailsAction.setDetailsId(""));
                dispatch(detailsAction.setGameDetails({}));
              }}
            />
          ))
        )}
      </RelatedStyled>
    </>
  );
}

export default Related;
