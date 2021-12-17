import React from "react";
import styled from "styled-components";

import { useScreenShotDetails } from "../../../hooks/useQueryGame";
function ScrennShotModel({ id }) {
  const { data } = useScreenShotDetails(id);
  console.log(data, "screen");
  console.log(id, "screen");

  return (
    <>
      <h2 className="title-screen">Screen Shots:</h2>
      <ScrennShots className="screens">
        {data?.results.map((img) => (
          <li key={img.id}>
            <img src={img.image} alt={"imgs" + img.id} />
          </li>
        ))}
      </ScrennShots>
    </>
  );
}
export const ScrennShots = styled.ul`
  &.screens ul {
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
