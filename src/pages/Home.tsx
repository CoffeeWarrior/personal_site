import React from "react";
import { MoonLanding, Nav, SocialIcons } from "../components";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import { PageContainer, Timeline, PostProps, Header } from "../components";
import styled from "styled-components";
import { Flexbox, Sizes, SnapElement } from "../styling";
import { InvisBackground } from "../components/MoonLanding/MoonLandingBackground";
import { InvisPageContainer } from "../components/PageContainer";
import { SnapElementContainer } from "../styling/SnapElement";
const SnapElementsWrapper = styled.div`
  /* flex: 1; */
`;

const HomeFlex = styled(Flexbox)`
  width: 95%;
  @media only screen and (min-width: ${Sizes.minWidthTablet}) {
    width: 70%;
  }
`;

export const Home = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    read(firebaseResources.home).then((val: PostProps[]) => {
      setPosts(val);
    });
  }, []);

  return (
    <>
      <Nav></Nav>

      <InvisPageContainer>
        <SnapElementsWrapper>
          <SnapElementContainer>
            <HomeFlex>
              <MoonLanding></MoonLanding>
              <InvisBackground></InvisBackground>
            </HomeFlex>
          </SnapElementContainer>
        </SnapElementsWrapper>
      </InvisPageContainer>

      <PageContainer>
        <SnapElementsWrapper>
          {posts.map((post, i) => (
            <SnapElement>
              <HomeFlex>
                <InvisBackground />
                <Timeline post={post} key={i} />
              </HomeFlex>
            </SnapElement>
          ))}
        </SnapElementsWrapper>
      </PageContainer>
    </>
  );
};
