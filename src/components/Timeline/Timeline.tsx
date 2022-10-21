import styled from "styled-components";
import { colors, toPx } from "../../styling";
import React from "react";
import { Post, PostProps } from "./Post";

export type TimelineProps = { posts: PostProps[] };

const Scrollable = styled.div`
  overflow-y: scroll;
  height: 65vh;
  flex: 1;
  padding-left: 10px;
  overflow: scroll;
`;

export const Timeline: React.FC<TimelineProps> = ({ posts }) => {
  const timelineWidth = 6; //width in px
  const Timeline = styled.div`
    border-left: ${toPx(timelineWidth)} solid ${colors.white};
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 50px;
  `;

  return (
    <Scrollable>
      <Timeline>
        {posts.map((post, i) => (
          <Post timelineWidth={timelineWidth} key={i} {...post}></Post>
        ))}
      </Timeline>
    </Scrollable>
  );
};
