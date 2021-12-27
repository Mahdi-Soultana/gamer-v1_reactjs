import styled from "styled-components";
import { motion } from "framer-motion";
export const ModelStyledC = styled(motion.aside)`
  position: fixed;
  background-color: #ffffff;
  transform-origin: 50% 50%;
  width: 97%;
  max-width: 1000px;
  min-height: 40vh;
  height: 99%;
  margin: 0 auto;
  top: 0.3rem;
  left: 12%;
  transform: translateX(-50%);
  border-radius: 1em;
  box-shadow: 0 0 16px #333;
  overflow-y: auto;
  z-index: 10;
  @media (max-width: 764px) {
    left: 0%;
  }
  ::-webkit-scrollbar {
    border-raduis: 5em;
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;

    border-bottom-right-radius: 5em;
    border-top-right-radius: 5em;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ///content
  header {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    ul {
      padding: 2rem;
      display: flex;
      align-items: center;
      flex-flow: row wrap;
      justify-content: space-between;
      li {
        padding: 1rem;
        margin: 0 1rem;
      }
    }
  }
  .title {
    padding: 1rem;
    font-size: 2rem;
    font-weight: 500;
  }
  span {
    display: inline-block;
    border-radius: 2em;
    padding: 0.5rem 1.2rem;
    background-color: yellow;

    width: 70px;
    box-shadow: 1px 1px 6px #333;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1.7px;
    margin: 1rem;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title-screen {
    padding: 2rem;
    font-style: italic;
    font-weight: 300;
    font-size: 3rem;
  }
  display: grid;
  width: 100%;
  .hero {
    width: 100%;
    height: 600px;

    border-bottom: #b3b3b3 solid 1px;
  }
  .description {
    font-size: 1.3rem;
    line-height: 1.6;
    font-weight: 500;

    padding: 3rem;
  }
  .screens {
    display: block;
    width: 100%;
    height: auto;
    padding: 0rem;
    li {
      padding: 0rem;
      /* border-bottom: #333 solid 1px; */
    }
    img {
      width: 100%;
      padding: 0rem;
      display: block;
    }
  }
  h3 {
    margin-left: 2rem;
    font-size: 1.2rem;
  }
`;

export const Rating = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  justify-items: center;

  margin-bottom: 2rem;

  .released {
    grid-column: 1/-1;
    display: flex;
    align-items: center;
    time {
      font-size: 2rem;
      font-family: Georgia, "Times New Roman", Times, serif;
      margin-left: 2rem;
      display: inline-block;
    }
    h4 {
      display: flex;
      align-items: center;
      font-size: 2rem;

      svg {
        font-size: 2rem;
        margin-right: 1rem;

        path {
          stroke: yellowgreen;
        }
      }
    }
  }
  h3 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    div {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      svg {
        font-size: 2rem;
        margin: 0 0.5rem;
        fill: yellow;
        filter: drop-shadow(0 0 2px #333);
      }
    }
  }
`;
