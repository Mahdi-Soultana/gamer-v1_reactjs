import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { GamesSearchUrl } from "../../BaseURL";
import Search from "../Search/SearchForm";
import { NavStyled } from "./NavStyled/NavStyled";
function Nav() {
  return (
    <NavStyled>
      <h1>Gamer</h1>
      <Search />
    </NavStyled>
  );
}

export default Nav;
