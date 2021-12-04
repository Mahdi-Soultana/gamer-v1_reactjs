import { motion } from "framer-motion";
import styled from "styled-components";
export const RelatedStyled = styled.section`
  background: #ffffff;
  width: 100%;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 190px);
  row-gap: 2rem;
  column-gap: 1rem;

  justify-content: center;
  align-content: center;
  /* height: 250px; */
`;
export const Card = styled(motion.div)`
  width: 190px;
  height: 290px;
  position: relative;
  z-index: 20;
  cursor: pointer;
  background: url(${(p) => p.url}) no-repeat center center/cover;
  /* background: #000; */
  border-radius: 1em;
  box-shadow: 0 0 3px #333;
  &:hover {
    box-shadow: 0 0 6px #333;
  }
`;
