import React from "react";
import { useDispatch } from "react-redux";
import { detailsAction } from "../../../redux/slices/details";
import PlatformDetails from "../../modal/PlatformDetails/PlatformDetails";
import styled from "styled-components";
import { motion } from "framer-motion";
export const SearchMenuStyled = styled.ul`
  position: absolute;
  left: -1rem;
  top: 110%;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(60px, 80px);
  background: rgba(250, 250, 250, 0.41);
  padding: 0.4rem;
  box-shadow: 0 0 4px #333;
  border-radius: 0.4em;
  gap: 0.5rem;

  > li {
    cursor: pointer;
    display: grid;
    grid-auto-rows: 80px;
    grid-template-columns: 80px 1fr;
    box-shadow: 0 1px 2px #333;
    column-gap: 1rem;
    align-items: start;
    text-align: left;
    position: relative;
    color: black;
    font-weight: 600;
    box-shadow: 0 0px 5px #333;
    background: #fff;
    &:hover {
      color: black;
      background: #eee;
    }
    div {
      display: grid;
      gap: 1rem;
      .rating {
        position: absolute;
        width: 40px;
        height: 40px;
        background: #9a4b4e;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 700;
        bottom: 9%;
        right: 3%;
        box-shadow: 0 0px 5px whitesmoke;
      }
    }
  }
  h3 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;

function SearchMenu({ data }) {
  const dispatch = useDispatch();

  return (
    <SearchMenuStyled>
      {!data.length && <h3> no game match your search !</h3>}
      {data.map((game) => {
        const { background_image, name, id, rating, parent_platforms } = game;
        return (
          <motion.li
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 2, opacity: 0 }}
            key={id}
            title={name}
            onClick={() => dispatch(detailsAction.setDetailsId(id))}
          >
            <img src={background_image} alt={name} />
            <div>
              <h4>{name}</h4>
              <span className="rating">{rating}</span>
              <PlatformDetails data={parent_platforms} />
            </div>
          </motion.li>
        );
      })}
    </SearchMenuStyled>
  );
}

export default SearchMenu;
