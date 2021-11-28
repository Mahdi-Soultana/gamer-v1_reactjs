import { AnimatePresence } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { useGameDetails } from "../../hooks/useQueryGame";
import Model from "./Model";

function Details() {
  const id = useSelector((state) => state.details.id);
  const { data } = useGameDetails(id);

  return (
    <AnimatePresence>
      {(data && id && <Model data={data} />) || ""}
    </AnimatePresence>
  );
}

export default Details;
