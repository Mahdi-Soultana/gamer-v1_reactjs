import React from "react";
import ModelStyled, { Backdrop } from "./ModelStyled";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { detailsAction } from "../../redux/slices/details";
function Model({ data }) {
  const dispatch = useDispatch();

  return (
    <>
      <ModelStyled data={data} />
      <Backdrop
        onClick={() => {
          dispatch(detailsAction.setDetailsId(""));
          dispatch(detailsAction.setGameDetails({}));
        }}
      />
    </>
  );
}

export default Model;
