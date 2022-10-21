import React from "react";
import styled from "styled-components";
import { colors } from "../styling";

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
  `;

  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
  `;

  return (
    <Background>
      <div style={{ height: "5vh", width: "100%" }} />
      <PageContainer>{children}</PageContainer>
      <div style={{ height: "70vh", width: "100%" }} />
    </Background>
  );
};
