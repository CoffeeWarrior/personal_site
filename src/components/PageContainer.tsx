import React from "react";
import styled from "styled-components";

type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: black;
  `;

  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
  `;

  return (
    <Background>
      <PageContainer>{children}</PageContainer>
    </Background>
  );
};
export default PageContainer;
