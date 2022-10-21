import React from "react";
import { MoonLanding } from "../components";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import { PageContainer, Timeline, PostProps } from "../components";
import { sortPostsByYear } from "../utils";
import styled from "styled-components";
import { Nav } from "../routing/Nav/Nav";

const Flexbox = styled.div`
  display: flex;
  direction: row;
  gap: 20px;
  margin-top: 2vh;
`;

export const Home = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    read(firebaseResources.home).then((val: PostProps[]) => {
      setPosts(val.sort(sortPostsByYear));
    });
  }, []);

  return (
    <PageContainer>
      <Flexbox>
        <div>
          <h1>Welcome To My Homepage</h1>
          <h2>I'm Lucas</h2>
        </div>
        <Nav></Nav>
      </Flexbox>
      <Flexbox>
        <MoonLanding></MoonLanding>
        <Timeline posts={posts} />
      </Flexbox>
    </PageContainer>
  );
};
