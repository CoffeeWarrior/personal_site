import styled from "styled-components";
import { colors } from "../styling";
import React from "react";

const Line = styled.div`
  width: 10px;
  background-color: ${colors.space};
  height: 100%;
  position: sticky;
  top: 0;
`;

export const Timeline = () => {
  return <Line></Line>;
};
