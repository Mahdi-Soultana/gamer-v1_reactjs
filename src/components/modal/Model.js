import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import { detailsAction } from "../../redux/slices/details";
import { searchAction } from "../../redux/slices/search";
import { uiAction } from "../../redux/slices/ui";
import ModelStyled from "./ModelStyled";
const Backdrop = styled(motion.div)`
  position: fixed;
  background-color: #2727273b;
  width: 100%;
  z-index: 9;
  min-height: 100vh;
  cursor: pointer;
  top: 0rem;
  left: 0%;
`;
function Model({ data }) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.details.id);
  return (
    <>
      <ModelStyled data={data} />

      <Backdrop
        onClick={() => {
          dispatch(detailsAction.setDetailsId(""));
          dispatch(uiAction.toggleInfoClose());
          dispatch(detailsAction.setGameDetails({}));
          dispatch(searchAction.setSearch(""));
        }}
      />
    </>
  );
}

export default Model;
