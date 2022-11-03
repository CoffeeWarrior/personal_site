import React from "react";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";

import EmailIcon from "../images/icons/emailIcon.png";
import GithubIcon from "../images/icons/githubIcon.png";
import LinkedinIcon from "../images/icons/linkedinIcon.png";
import styled from "styled-components";
import { colors, Flexbox, Sizes } from "../styling";

const FlexboxContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: baseline;
  gap: 4px;
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

const IconDiameter = "40px";

const Icon = styled.img`
  width: ${IconDiameter};
  height: ${IconDiameter};
`;

export const SocialIcons = () => {
  // github = posts[0]
  // linkedin = posts[1]
  // email = posts[2]

  //const images = [GithubIcon, LinkedinIcon, EmailIcon];

  const [copied, setCopied] = useState(false); //maybe want to give some indication when copied
  const copiedPopupDuration = 1025;

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
    <FlexboxContainer>
      <Item onClick={() => copyTextToClipboard("Lucas.Goldman99@gmail.com")}>
        <Icon alt="" src={EmailIcon} title="Copy My Email"></Icon>
      </Item>
      <a
        style={{ textDecoration: "none" }}
        href={"https://www.linkedin.com/in/lucasgoldman99/"}
        target="_blank"
        rel="noreferrer noopener"
        title="My LinkedIn"
      >
        <Item>
          <Icon alt="" src={LinkedinIcon}></Icon>
        </Item>
      </a>
      <a
        style={{ textDecoration: "none" }}
        href={"https://github.com/coffeewarrior"}
        target="_blank"
        rel="noreferrer noopener"
        title="My Github"
      >
        <Item>
          <Icon alt="" src={GithubIcon}></Icon>
        </Item>
      </a>
    </FlexboxContainer>
  );
};
