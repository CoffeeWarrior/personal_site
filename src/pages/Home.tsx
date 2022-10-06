import React from "react";
import { MoonLanding } from "../components";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import { PageContainer, Timeline, PostProps } from "../components";

export const Home = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    read(firebaseResources.home).then((val: PostProps[]) => {
      const sortPosts = (a: PostProps, b: PostProps) =>
        a.year > b.year ? -1 : 1;
      setPosts(val.sort(sortPosts));
    });
  }, []);

  return (
    <PageContainer>
      {/* <MoonLanding></MoonLanding> */}
      <Timeline posts={posts} />
    </PageContainer>
  );
};
