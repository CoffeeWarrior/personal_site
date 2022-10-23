import React from "react";
import { Banner, MoonLanding } from "../components";
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
    <Banner></Banner>
  </MoonLandingContactWrapper>
);

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
      <FlexboxMarginTop>
        {MoonLanding_ContactInfo}
        <Timeline posts={posts} />
      </FlexboxMarginTop>
    </PageContainer>
  );
};
