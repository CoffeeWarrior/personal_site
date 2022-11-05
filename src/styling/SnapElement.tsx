import styled from "styled-components";
import { Flexbox } from "./Flexbox";
import React, { useEffect, useRef } from "react";
import { UseVisible } from "../hooks";

export const SnapContainer = styled(Flexbox)`
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const SnapElem = styled(SnapContainer)`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
`;

type SnapElementProps = {
  index: number;
  children: React.ReactNode | React.ReactNode[];
};

export const SnapElement: React.FC<SnapElementProps> = ({
  index,
  children,
}) => {
  const [ref, visible] = UseVisible();
  useEffect(() => {
    if (visible) {
      console.log(`Snap element ${index} visible`);
    }
  });
  return <SnapElem ref={ref}>{children}</SnapElem>;
};
