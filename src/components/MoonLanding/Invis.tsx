import React from "react";
import styled from "styled-components";

type invisProps = { src: string };

export const Invis: React.FC<invisProps> = ({ src }) => {
  const InvisibleImage = styled.img`
    height: 100%;
    width: 100%;
    opacity: 0;
  `;

  return <InvisibleImage src={src} />;
};
