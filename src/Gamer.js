import React from "react";
import GlobleStyles from "./GlobaleStyle";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
function Gamer() {
  const detailsIsOpen = useSelector((state) => state.ui.detailsIsOpen);

  return (
    <>
      <Home />
      {detailsIsOpen && <div className="backdrop"></div>}
      <GlobleStyles />
    </>
  );
}

export default Gamer;
