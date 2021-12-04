import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import FeaturedGames from "../components/home/featured/FeaturedGame";
import NewGames from "../components/home/new/NewGame";
import PopularGames from "../components/home/popular/PopularGames";
import Details from "../components/modal/Details";

import Nav from "../components/nav/Nav";

function Home() {
  const term = useSelector((state) => state.search.term);
  return (
    <>
      <AnimateSharedLayout>
        <Nav />
        <Details />

        {!term && (
          <>
            {" "}
            <PopularGames />
            <FeaturedGames />
            <NewGames />
          </>
        )}
      </AnimateSharedLayout>
    </>
  );
}

export default Home;
