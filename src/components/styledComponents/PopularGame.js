import React from "react";
import { CardGame } from "./CardStyled";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { detailsAction } from "../../redux/slices/details";
import { uiAction } from "../../redux/slices/ui";

function PopularGame({ game }) {
  const dispatch = useDispatch();

  return (
    <CardGame
      shadow1={game.dominant_color}
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
    >
      <motion.img
        layoutId={"hero_" + game.id.toString()}
        src={game.background_image}
        alt={game.id.toString()}
        onClick={() => {
          dispatch(uiAction.toggleInfoOpen());
          dispatch(detailsAction.setDetailsId(game.id));
        }}
      />
      <motion.h2 layoutId={"title_" + game.id.toString()}>
        {game.name || "hey"}
      </motion.h2>
      <motion.h3 layoutId={"date" + game.id.toString()}>
        {game.released || "hey"}
      </motion.h3>
    </CardGame>
  );
}

export default PopularGame;
