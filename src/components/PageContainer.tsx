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
    background-image: radial-gradient(
      circle at top left,
      #006494,
      80%,
      #1427b8
    );
  `;

  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
  `;

  return (
    <Background>
      <PageContainer>{children}</PageContainer>
    </Background>
  );
};
export default PageContainer;
