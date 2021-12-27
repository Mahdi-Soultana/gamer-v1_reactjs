import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import { useScreenShotDetails } from "../../../hooks/useQueryGame";
function ScrennShotModel({ id }) {
  const { data } = useScreenShotDetails(id);
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    exit: { opacity: 0 },
  };
  return (
    <>
      <h2 className="title-screen">Screen Shots:</h2>
      <ScrennShots
        className="screens"
        variants={variants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {data?.results.map((img) => (
          <motion.li variants={variants} key={img.id}>
            <img src={img.image} alt={"imgs" + img.id} />
          </motion.li>
        ))}
      </ScrennShots>
    </>
  );
}
export const ScrennShots = styled(motion.ul)`
  &.screens ul {
    overflow: hidden;
    width: 100%;

    li {
      height: 900px;
      width: 100%;
      img {
        height: 900px;
        width: 100%;
      }
    }
  }
`;
export default ScrennShotModel;
