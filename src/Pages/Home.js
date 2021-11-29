import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import FeaturedGames from "../components/home/featured/FeaturedGame";
import NewGames from "../components/home/new/NewGame";
import PopularGames from "../components/home/popular/PopularGames";
import Details from "../components/modal/Details";

import Nav from "../components/nav/Nav";

function Home() {
  return (
    <>
      <AnimateSharedLayout>
        <Nav />
        <Details />

        <PopularGames />
        <FeaturedGames />
        <NewGames />
      </AnimateSharedLayout>
    </>
  );
}

export default Home;
