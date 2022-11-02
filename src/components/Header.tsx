import React from "react";
import styled from "styled-components";
import { Flexbox } from "../styling";
import { Nav } from "./Nav";

type HeaderProps = {
  header?: string;
  subheader?: string;
};

const FlexboxMarginTop = styled(Flexbox)`
  margin-top: 4vh;
  margin-bottom: 2vh;
  align-items: center;
  justify-content: center;
`;

export const Header = ({ header, subheader }: HeaderProps) => (
  <FlexboxMarginTop>
    <div>
      <h1>{header}</h1>
      <h2>{subheader}</h2>
    </div>
  </FlexboxMarginTop>
);
