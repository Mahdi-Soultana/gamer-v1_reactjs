import React from "react";
import { CardGame } from "./CardStyled";
import { useDispatch } from "react-redux";
import { detailsAction } from "../../redux/slices/details";
import { motion } from "framer-motion";

function PopularGame({ game }) {
  const dispatch = useDispatch();

  return (
    <CardGame shadow1={game.dominant_color}>
      <motion.img
        layoutId={"hero_" + game.id.toString()}
        src={game.background_image}
        alt=""
        onClick={() => dispatch(detailsAction.setDetailsId(game.id))}
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
