import React from "react";
import styled from "styled-components";
import { twinkle, AbsPositionCenter } from "../../styling";

export type flowerProps = {
  delay: number;
  src: string;
};

export const Flowers: React.FC<flowerProps> = ({ delay, src }) => {
  const Flowers = styled(AbsPositionCenter)`
    z-index: 97;
    ${twinkle(delay)}
  `;
  return <Flowers src={src}></Flowers>;
};
