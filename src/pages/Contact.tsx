import React from "react";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import { PageContainer, TextBackground } from "../components";

import EmailIcon from "../images/icons/emailIcon.png";
import GithubIcon from "../images/icons/githubIcon.png";
import LinkedinIcon from "../images/icons/linkedinIcon.png";
import lucas from "../images/SpaceDrawings/IndividualImages/lucas-cropped.png";

export const Contact = () => {
  // github = posts[0]
  // linkedin = posts[1]
  // email = posts[2]

  const images = [GithubIcon, LinkedinIcon, EmailIcon];

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
      <div className="contactPage">
        <div className="contactContent">
          <TextBackground></TextBackground>
          <div className="text">
            <h1>My Contact Info:</h1>

            <a href={posts[0]} target="_blank" rel="noreferrer noopener">
              <div className="item">
                <img className="icon" src={GithubIcon}></img>
                <h3>{posts[0].slice(8)}</h3>
              </div>
            </a>

            <a href={posts[1]} target="_blank" rel="noreferrer noopener">
              <div className="item">
                <img className="icon" src={LinkedinIcon}></img>
                <h3>{posts[1].slice(8)}</h3>
              </div>
            </a>

            <div className="item" onClick={() => copyTextToClipboard(posts[2])}>
              <img className="icon" src={EmailIcon}></img>
              <h3>{posts[2]}</h3>
            </div>

            <div>
              {copied ? (
                <h3 className="copiedPopup">copied to clipboard</h3>
              ) : null}
            </div>
          </div>
          <div className="image">
            <img className="lucas-cropped" src={lucas}></img>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
