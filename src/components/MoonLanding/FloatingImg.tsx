import React from "react";
import styled from "styled-components";
import { AbsPositionCenter, Floating } from "../../styling";

type floatingImgProps = {
  src: string;
  delayFirst: number;
  durationFirst: number;
  durationSecond: number;
};

export const FloatingImg: React.FC<floatingImgProps> = ({
  src,
  delayFirst,
  durationFirst,
  durationSecond,
}) => {
  const Image = styled(AbsPositionCenter)`
    z-index: 101;
    ${Floating(delayFirst, durationFirst, durationSecond)}
  `;

  return <Image src={src} />;
};
