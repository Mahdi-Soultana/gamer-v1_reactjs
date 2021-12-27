import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import FeaturedGames from "../components/home/featured/FeaturedGame";
import NewGames from "../components/home/new/NewGame";
import PopularGames from "../components/home/popular/PopularGames";
import Details from "../components/modal/Details";

import Nav from "../components/nav/Nav";
import styled from "styled-components";
export const MainContainer = styled.main`
  text-align: center;
`;
function Home() {
  const submitState = useSelector((state) => state.ui.submitState);
  return (
    <>
      <AnimateSharedLayout>
        <Nav />
        <Details />

        {!submitState && (
          <MainContainer>
            {" "}
            <PopularGames />
            <FeaturedGames />
            <NewGames />
          </MainContainer>
        )}
      </AnimateSharedLayout>
    </>
  );
}

export default Home;
