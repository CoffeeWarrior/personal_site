import React from "react";
import styled from "styled-components";
import { AbsPositionCenter } from "../../styling";

type staticImgProps = { src: string; zIndex?: number };

export const StaticImg: React.FC<staticImgProps> = ({ src, zIndex = 1 }) => {
  const Image = styled(AbsPositionCenter)`
    z-index: ${zIndex};
  `;

  return <Image src={src} />;
};
