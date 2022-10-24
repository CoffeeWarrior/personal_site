import React from "react";
import { SocialIcons, MoonLanding } from "../components";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import { PageContainer, Timeline, PostProps, Header } from "../components";
import { sortPostsByYear } from "../utils";
import styled from "styled-components";
import { Flexbox } from "../styling";

const FlexboxMarginTop = styled(Flexbox)`
  margin-top: 2vh;
`;

const MoonLandingContactWrapper = styled(Flexbox)`
  flex-direction: column;
  flex: 1.1;
`;

const MoonLanding_ContactInfo = (
  <MoonLandingContactWrapper>
    <MoonLanding></MoonLanding>
    <SocialIcons></SocialIcons>
  </MoonLandingContactWrapper>
);

export const Home = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    read(firebaseResources.home).then((val: PostProps[]) => {
      setPosts(val);
    });
  }, []);

  return (
    <PageContainer>
      <Header header="Lucas' Website" />
      <FlexboxMarginTop>
        <MoonLanding />
        <Timeline posts={posts} />
      </FlexboxMarginTop>
    </PageContainer>
  );
};
