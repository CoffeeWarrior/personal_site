import React from "react";
import styled from "styled-components";
import { colors, Sizes } from "../styling";
import { Banner } from "../components";

export type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    overflow-x: hidden !important;
  `;

  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    @media only screen and (max-width: ${Sizes.maxWidthTablet}) {
      width: 95%;
    }
  `;

  return (
    <Background>
      {/* <Banner></Banner> */}
      <PageContainer>{children}</PageContainer>
      <div style={{ height: "7vh", width: "100%" }} />
    </Background>
  );
};
