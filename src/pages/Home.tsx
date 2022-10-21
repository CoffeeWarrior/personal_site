import React from "react";
import { MoonLanding } from "../components";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import { PageContainer, Timeline, PostProps, Header } from "../components";
import { sortPostsByYear } from "../utils";
import styled from "styled-components";
import { Flexbox } from "../styling";

export const Home = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    read(firebaseResources.home).then((val: PostProps[]) => {
      setPosts(val.sort(sortPostsByYear));
    });
  }, []);

  return (
    <PageContainer>
      <Header header="Welcome To My Homepage" subheader="I'm Lucas" />
      <Flexbox>
        <MoonLanding></MoonLanding>
        <Timeline posts={posts} />
      </Flexbox>
    </PageContainer>
  );
};
