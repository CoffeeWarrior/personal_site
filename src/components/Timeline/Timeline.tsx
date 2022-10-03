import styled, { css } from "styled-components";
import { colors, toPx } from "../../styling";
import React from "react";
import { Post, PostProps } from "./Post";

type TimelineProps = {};

const tempPost: any = {
  year: 2022,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const Timeline: React.FC<TimelineProps> = ({}) => {
  const timelineWidth = 4;
  const Timeline = styled.div`
    padding-top: 10%;
    border-left: ${toPx(timelineWidth)} solid ${colors.white};
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  return (
    <Timeline>
      <Post {...tempPost} timelineWidth={timelineWidth} />
      <Post {...tempPost} timelineWidth={timelineWidth} />
      <Post {...tempPost} timelineWidth={timelineWidth} />
      <Post {...tempPost} timelineWidth={timelineWidth} />
      <Post {...tempPost} timelineWidth={timelineWidth} />
      <Post {...tempPost} timelineWidth={timelineWidth} />
      <Post {...tempPost} timelineWidth={timelineWidth} />
      <Post {...tempPost} timelineWidth={timelineWidth} />
      <Post {...tempPost} timelineWidth={timelineWidth} />
    </Timeline>
  );
};
