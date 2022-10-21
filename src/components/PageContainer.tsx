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
    width: 80%;
    height: 80vh;
  `;

  return (
    <Background>
      <div style={{ height: "3vh", width: "100%" }} />
      <PageContainer>{children}</PageContainer>
    </Background>
  );
};
