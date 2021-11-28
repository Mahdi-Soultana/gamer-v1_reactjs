import React from "react";
import styled from "styled-components";

import { useScreenShotDetails } from "../../../hooks/useQueryGame";
function ScrennShotModel({ id }) {
  const { data } = useScreenShotDetails(id);

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
 &.screens ul li img{
    height:900px;
 }
  }
`;
export default ScrennShotModel;
