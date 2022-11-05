import React from "react";
import styled from "styled-components";

type invisProps = { src: string };

export const Invis: React.FC<invisProps> = ({ src }) => {
  const InvisibleImage = styled.img`
    position: relative;
    /* width: 100%; */
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    opacity: 0;
    display: inline-block;
  `;

  return <InvisibleImage src={src} />;
};
