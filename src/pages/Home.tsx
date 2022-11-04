import React from "react";
import { MoonLanding, Nav, Post, SocialIcons, Timeline } from "../components";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import { PageContainer, PostProps, Header } from "../components";
import styled from "styled-components";
import { colors, Flexbox, Sizes, SnapElement } from "../styling";
import { InvisBackground } from "../components/MoonLanding/MoonLandingBackground";
import { InvisPageContainer } from "../components/PageContainer";
import { SnapContainer } from "../styling/SnapElement";
import { UseVisible } from "../hooks";
import { makePostValid } from "../utils";
const SnapElementsWrapper = styled.div`
  /* flex: 1; */
`;

const HomeFlex = styled(Flexbox)`
  width: 70%;
  @media only screen and (max-width: ${Sizes.maxWidthTablet}) {
    align-items: center;
    width: 95%;
    height: 100%;
  }
`;

const Background = styled.div`
  height: 110%;
  width: 100%;
  position: absolute;
  background-image: linear-gradient(
    180deg,
    ${colors.background} 80%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 5;
  top: -10vh;
  left: 0;
`;

const FlexElement = styled.div`
  flex: 1;
  position: relative;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Home = () => {
  return (
    <>
      <InvisPageContainer>
        <div>
          <SnapContainer>
            <HomeFlex>
              <FlexElement>
                <MoonLanding></MoonLanding>
                <Background></Background>
              </FlexElement>
              <InvisBackground></InvisBackground>
            </HomeFlex>
          </SnapContainer>
        </div>
      </InvisPageContainer>
      <HomeContent />
    </>
  );
};

const HomeContent = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    read(firebaseResources.home).then((val: PostProps[]) => {
      const validPosts: PostProps[] = val.map((val) => makePostValid(val));

      setPosts(validPosts);
    });
  }, []);

  // useEffect(() => {
  //   if (nextVisible == true) {
  //     console.log("snapContainer[1] visible");
  //   }
  // }, [nextVisible]);
  return (
    <PageContainer>
      {/* <Nav></Nav> */}
      <div>
        {posts.map((post, i) => (
          <SnapElement>
            <HomeFlex>
              <InvisBackground />
              <Post {...post} key={i}>
                {i == 0 ? <SocialIcons></SocialIcons> : null}
              </Post>
            </HomeFlex>
          </SnapElement>
        ))}
      </div>
    </PageContainer>
  );
};
