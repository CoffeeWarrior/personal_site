import React from "react";
import styled from "styled-components";
import { colors, Sizes } from "../styling";

export type PageContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow-x: hidden !important;
  @media only screen and (max-width: ${Sizes.maxWidthMobileL}) {
    padding-top: 4vh;
  }
`;

export const InvisPageContainer: React.FC<PageContainerProps> = ({
  children,
}) => {
  const Background = styled(Container)`
    position: fixed;
    pointer-events: none;
    z-index: 100;
  `;

  return <Background>{children}</Background>;
};

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const Background = styled(Container)`
    background-color: ${colors.background};
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  `;

  return <Background>{children}</Background>;
};
