import React from "react";
import { Flexbox } from "../../styling";
import { Nav } from "./Nav/Nav";

type HeaderProps = {
  header: string;
  subheader: string;
};

export const Header = ({ header, subheader }: HeaderProps) => (
  <Flexbox>
    <div>
      <h1>{header}</h1>
      <h2>{subheader}</h2>
    </div>
    <Nav></Nav>
  </Flexbox>
);
