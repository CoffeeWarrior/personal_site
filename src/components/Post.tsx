import styled from "styled-components";
import { colors } from "../styling";
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

export const Post = React.forwardRef<HTMLDivElement, PostElementProps>(
  ({ content, header, subheader, children = null }, ref) => {
    const PostWrapper = styled.div`
      margin-left: 40px;
      position: relative;
      flex: 1;
      align-self: flex-start;
    `;

    return (
      <PostWrapper ref={ref}>
        <Header>{header}</Header>
        <Subheader>{subheader}</Subheader>
        <Content>{content}</Content>
        {children}
      </PostWrapper>
    );
  }
);
