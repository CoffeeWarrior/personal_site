import React from "react";
import { MoonLanding } from "../components";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import { PageContainer, Timeline, PostProps } from "../components";
import { sortPostsByYear } from "../utils";

export const Home = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    read(firebaseResources.home).then((val: PostProps[]) => {
      setPosts(val.sort(sortPostsByYear));
    });
  }, []);

  return (
    <PageContainer>
      {/* <MoonLanding></MoonLanding> */}
      <Timeline posts={posts} />
    </PageContainer>
  );
};
