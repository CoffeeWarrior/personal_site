import React from "react";
import styled from "styled-components";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: yellow;
  scroll-snap-type: y mandatory;
  overflow: scroll;
`;

const Red = styled.div`
  background-color: red;
  width: 50vw;
  height: 50vh;
  position: sticky;
  top: 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Green = styled.div`
  background-color: green;
  width: 100%;
  height: 100vh;
  border: 1px solid black;
  scroll-snap-align: start;
`;

export const Projects = () => {
  return (
    <Page>
      <FlexRow>
        <Red></Red>
        <FlexColumn>
          <Green></Green>
          <Green></Green>
          <Green></Green>
          <Green></Green>
        </FlexColumn>
      </FlexRow>
    </Page>
  );
};
