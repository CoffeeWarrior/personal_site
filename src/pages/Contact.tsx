import React from "react";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import {
  MoonLandingBackground as Background,
  PageContainer,
} from "../components";

import EmailIcon from "../images/icons/emailIcon.png";
import GithubIcon from "../images/icons/githubIcon.png";
import LinkedinIcon from "../images/icons/linkedinIcon.png";
import styled from "styled-components";
import { colors, Sizes } from "../styling";

const Text = styled.div`
  z-index: 100;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  &:hover {
    color: ${colors.whiterWhite};
    cursor: pointer;
  }
`;

const Icon = styled.img`
  margin-right: 20px;
  width: 50px;
  height: 50px;
`;

const Center = styled.div`
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
`;

const ImgWidth = styled.div`
  @media only screen and (max-width: ${Sizes.maxWidthTablet}) {
    width: 100vw;
  }

  @media only screen and (max-width: ${Sizes.maxWidthMobileL}) {
    width: 120vw;
  }
`;

export const Contact = () => {
  // github = posts[0]
  // linkedin = posts[1]
  // email = posts[2]

  //const images = [GithubIcon, LinkedinIcon, EmailIcon];

  const [posts, setPosts] = useState(["", "", ""]);
  const [copied, setCopied] = useState(false);
  const copiedPopupDuration = 1025;

  useEffect(() => {
    read(firebaseResources.contact).then((val) => {
      setPosts(val.posts);
    });
  }, []);

  const copyTextToClipboard = async (text: any) => {
    if ("clipboard" in navigator) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, copiedPopupDuration);
      return await navigator.clipboard.writeText(text);
    }
  };

  return (
    <PageContainer>
      <Center style={{ opacity: "0.75" }}>
        <ImgWidth>
          <Background />
        </ImgWidth>
      </Center>
      <Center>
        <Text>
          <h1 style={{ paddingBottom: "20px" }}>My Contact Info:</h1>

          <a href={posts[0]} target="_blank" rel="noreferrer noopener">
            <Item>
              <Icon alt="" src={GithubIcon}></Icon>
              <h4 style={{ marginTop: "10px" }}>{posts[0].slice(8)}</h4>
            </Item>
          </a>

          <a href={posts[1]} target="_blank" rel="noreferrer noopener">
            <Item>
              <Icon alt="" src={LinkedinIcon}></Icon>
              <h4 style={{ marginTop: "10px" }}>{posts[1].slice(8)}</h4>
            </Item>
          </a>

          <Item onClick={() => copyTextToClipboard(posts[2])}>
            <Icon alt="" src={EmailIcon}></Icon>
            <h4 style={{ marginTop: "10px" }}>{posts[2]}</h4>
          </Item>
        </Text>
      </Center>
      <div>
        {copied ? <h3 className="copiedPopup">copied to clipboard</h3> : null}
      </div>
    </PageContainer>
  );
};
