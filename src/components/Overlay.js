import styled, { css } from "styled-components";
import React from "react";

import background from "../images/Overlay/Overlay.png";

export const Overlay = () => {
  const Overlay = styled.div`
    mask-image: url(${background});
    mask-position: center;
    mask-size: cover;

    background-image: radial-gradient(
      circle at top left,
      #006494,
      80%,
      #1427b8
    );
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
  `;

  return <Overlay></Overlay>;
};
