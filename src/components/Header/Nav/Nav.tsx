import React from "react";
import links from "../../../routing/links/links";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, Sizes } from "../../../styling";
import { SocialIcons } from "../../SocialIcons";

const DIV = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: ${Sizes.minWidthTablet}) {
    justify-content: flex-end;
  }
  align-items: center;
  flex-basis: 0;
  column-gap: 20px;
`;

const H2 = styled.h2`
  list-style: None;
  color: ${colors.white};
  border-bottom: 1px solid ${colors.white};
  &:hover {
    color: ${colors.whiterWhite};
    border-bottom: 1px solid ${colors.whiterWhite};
  }
`;

const LINK = styled(Link)`
  text-decoration: none;
`;

const NAV = styled.nav`
  flex: 1;
`;

export const Nav = () => {
  return (
    <NAV>
      <DIV>
        <SocialIcons></SocialIcons>
        {/* <LINK to={links.home}>
          <H2>Home</H2>
        </LINK> */}
        {/* <LINK to={links.projects}>
          <H2>Projects</H2>
        </LINK> */}
        {/* <LINK to={links.resume}>
          <H2>Resume</H2>
        </LINK> */}
        {/* <LINK to={links.contact}>
          <H2>Contact</H2>
        </LINK> */}
        {/* <LINK to={links.myFeed}><H2>My Feed</H2></LINK> */}
        {/* <LINK to={links.login}>
          <H2>Login</H2>
        </LINK> */}
      </DIV>
    </NAV>
  );
};
