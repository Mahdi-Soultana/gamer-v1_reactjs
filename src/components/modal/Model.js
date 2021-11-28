import styled from "styled-components";
import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { detailsAction } from "../../redux/slices/details";
import ModelStyled from "./ModelStyled";
const Backdrop = styled(motion.div)`
  position: fixed;
  background-color: #2727273b;
  width: 100%;
  z-index: 3;
  min-height: 100vh;
  cursor: pointer;
  top: 0rem;
  left: 0%;
`;
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
