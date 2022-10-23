import React from "react";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import { MoonLandingBackground as Background, PageContainer } from ".";

import EmailIcon from "../images/icons/emailIcon.png";
import GithubIcon from "../images/icons/githubIcon.png";
import LinkedinIcon from "../images/icons/linkedinIcon.png";
import styled from "styled-components";
import { colors, Flexbox, Sizes } from "../styling";
import { Header } from ".";

const Text = styled(Flexbox)`
  flex: 1;
  background: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: baseline;
  gap: 4px;
  flex-direction: column;
  @media only screen and (min-width: ${Sizes.minWidthTablet}) {
    gap: 20px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  &:hover {
    color: ${colors.whiterWhite};
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Banner = () => {
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
    <Text>
      <h2>Contact me:</h2>
      <a
        style={{ textDecoration: "none" }}
        href={posts[0]}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Item>
          <Icon alt="" src={GithubIcon}></Icon>
          <h4>{posts[0].slice(8)}</h4>
        </Item>
      </a>

      <a
        style={{ textDecoration: "none" }}
        href={posts[1]}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Item>
          <Icon alt="" src={LinkedinIcon}></Icon>
          <h4>{posts[1].slice(8)}</h4>
        </Item>
      </a>

      <Item onClick={() => copyTextToClipboard(posts[2])}>
        <Icon alt="" src={EmailIcon}></Icon>
        <h4>{posts[2]}</h4>
      </Item>
    </Text>
  );
};
