import styled from "styled-components";
import { colors, Sizes, toPx } from "../../styling";
import React from "react";
import { Post, PostProps } from "./Post";

export type TimelineProps = {
  post: PostProps;
  showTimeline?: boolean;
};

export const Timeline: React.FC<TimelineProps> = ({
  post,
  showTimeline = true,
}) => {
  const timelineWidth = 6; //width in px
  const Timeline = styled.div`
    border-left: ${showTimeline ? toPx(timelineWidth) : 0} solid ${colors.space};
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
  `;

  return (
    <Timeline>
      <Post timelineWidth={timelineWidth} {...post}></Post>
    </Timeline>
  );
};
