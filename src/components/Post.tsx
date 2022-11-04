import styled from "styled-components";
import { colors, Sizes } from "../styling";
import React from "react";
import { toPx } from "../styling";

export type PostProps = {
  content: string;
  header: string;
  subheader: string;
};

export type PostElementProps = {
  callback?: Function;
  children?: React.ReactNode | React.ReactNode[];
} & PostProps;

const Header = styled.h1`
  margin-bottom: 10px;
`;

const Subheader = styled.h2`
  margin-bottom: 15px;
`;

const Content = styled.p`
  margin-bottom: 15px;
`;

const HighlightedTech = styled.span`
  color: ${colors.flowerGreen};
`;

const HandleHighlight = (content: string): (React.ReactNode | string)[] => {
  return content
    .split("")
    .map((char) => (char == "]" ? "[" : char))
    .join("")
    .split("[")
    .filter((str) => str.length > 0)
    .map((val, i) =>
      i % 2 == 0 ? val : <HighlightedTech>{val}</HighlightedTech>
    );
};

const PostWrapper = styled.div`
  margin-left: 15px;
  /* padding-bottom: 2vh; */
  position: relative;
  flex: 1;
  align-self: flex-start;
  @media only screen and (min-width: ${Sizes.minWidthTablet}) {
    margin-left: 40px;
  }
`;

export const Post = React.forwardRef<HTMLDivElement, PostElementProps>(
  ({ content, header, subheader, children = null }, ref) => {
    const highlightedContent = <Content>{HandleHighlight(content)}</Content>;

    return (
      <PostWrapper ref={ref}>
        <Header>{header}</Header>
        <Subheader>{subheader}</Subheader>
        {highlightedContent}
        {children}
      </PostWrapper>
    );
  }
);
