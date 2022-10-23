import React from "react";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: radial-gradient(circle at top left, #006494, 80%, #1427b8);
`;

export const Background = () => {
  return <BackgroundDiv></BackgroundDiv>;
};
