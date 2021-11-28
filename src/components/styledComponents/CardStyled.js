import styled from "styled-components";
import { motion } from "framer-motion";

export const CardGame = styled(motion.article)`
  display: grid;
  opacity: 1 !important;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(100px, 210px) min-content min-content;
  background-color: #fff;
  text-align: center;
  border-radius: 0.35em;
  cursor: pointer;
  box-shadow: 0 -5px 15px -10px #${(p) => p.shadow1},
    0 1px 10px -10px #${(p) => p.shadow1};
  overflow: hidden;
  padding-bottom: 1rem;
  img {
    padding-bottom: 1rem;
  }
  h3 {
    padding-bottom: 0.6rem;
    margin-top: 0.5rem;
  }
`;

export const ListStyled = styled(motion.section)`
  place-content: center center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 1.5em;
  row-gap: 4rem;
`;
