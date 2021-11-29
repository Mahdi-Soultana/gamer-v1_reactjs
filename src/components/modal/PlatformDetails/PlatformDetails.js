import React from "react";
import styled from "styled-components";
import { RiXboxLine, RiGooglePlayFill } from "react-icons/ri";

import { FcLinux } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaPlaystation } from "react-icons/fa";
import { GoDeviceDesktop } from "react-icons/go";
import { SiNintendogamecube, SiMacos } from "react-icons/si";
import { FcAndroidOs } from "react-icons/fc";

export const PlatformIcons = styled.ul`
  display: flex;
  li {
    margin: 0 0.8rem;
    svg {
      font-size: 2rem;
    }
  }
`;

function dataTransform(slug) {
  if (slug.toLowerCase() === "pc") return <GoDeviceDesktop />;
  if (slug.toLowerCase() === "playstation") return <FaPlaystation />;
  if (slug.toLowerCase() === "xbox") return <RiXboxLine />;
  if (slug.toLowerCase() === "nintendo") return <SiNintendogamecube />;
  if (slug.toLowerCase() === "linux") return <FcLinux />;
  if (slug.toLowerCase() === "mac") return <BsApple />;
  if (slug.toLowerCase() === "android") return <FcAndroidOs />;
  if (slug.toLowerCase() === "ios") return <SiMacos />;
  return <RiGooglePlayFill />;
}

function PlatformDetails({ data }) {
  return (
    <div className="platforme">
      <PlatformIcons>
        {data?.map((item) => (
          <li key={item.platform.id} title={item.platform.name}>
            {dataTransform(item.platform.slug)}
          </li>
        ))}
      </PlatformIcons>
    </div>
  );
}

export default PlatformDetails;
