import styled, { css } from "styled-components";
import { colors } from "../../styling";
import React, { useRef } from "react";
import { toPx } from "../../styling";

export type PostProps = {
  content: string;
  header: string;
  technology: string;
};

export type PostElementProps = {
  callback?: Function;
  timelineWidth: number;
} & PostProps;

type TimelineWidth = {};

export const Post = React.forwardRef<HTMLDivElement, PostElementProps>(
  ({ content, header, technology, timelineWidth }, ref) => {
    const timelineTickDiameter = 12;

    const HeaderTextSize = 30;
    const PostWrapperMargin = 40;
    const borderWidth = 2;

    const tickTop = 0.5 * HeaderTextSize - 0.5 * timelineTickDiameter;

    const PostWrapper = styled.div`
      position: relative;
      margin-left: ${toPx(PostWrapperMargin)};
    `;

    const Header = styled.h1`
      font-size: ${toPx(HeaderTextSize)};
      color: ${colors.white};
    `;

    const Content = styled.p``;

    const TimelineTick = styled.div`
      position: absolute;
      box-sizing: content-box;
      width: ${toPx(timelineTickDiameter)};
      height: ${toPx(timelineTickDiameter)};
      top: ${toPx(tickTop)};
      left: ${toPx(
        -1 *
          (PostWrapperMargin +
            0.5 * timelineTickDiameter +
            0.5 * timelineWidth +
            borderWidth)
      )};
      border-radius: 990px;
      border: ${toPx(borderWidth)} solid ${colors.blue};
      background: ${colors.whiterWhite};
    `;

    return (
      <PostWrapper ref={ref}>
        <TimelineTick />
        <Header>{header}</Header>
        <Content>{content}</Content>
      </PostWrapper>
    );
  }
);
