import React from "react";
import styled from "styled-components";
import { Flexbox } from "../../styling";
import { Nav } from "./Nav/Nav";

type HeaderProps = {
  header?: string;
  subheader?: string;
};

const FlexboxMarginTop = styled(Flexbox)`
  margin-top: 2vh;
`;

export const Header = ({ header, subheader }: HeaderProps) => (
  <FlexboxMarginTop>
    <div>
      <h1>{header}</h1>
      <h2>{subheader}</h2>
    </div>
    <Nav></Nav>
  </FlexboxMarginTop>
);
