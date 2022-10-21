import React from "react";
import links from "../../../routing/links/links";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../styling";

const UL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 0;
  column-gap: 20px;
`;

const LI = styled.li`
  list-style: None;
  color: ${colors.white};
  font-size: 1.5em;
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
      <UL>
        <LINK to={links.home}>
          <LI>Home</LI>
        </LINK>
        {/* <Link to={links.projects}><LI>Projects</LI></Link> */}
        {/* <Link to={links.resume}>
          <LI>Resume</LI>
        </Link> */}
        <LINK to={links.contact}>
          <LI>Contact</LI>
        </LINK>
        {/* <Link to={links.myFeed}><LI>My Feed</LI></Link> */}
        <LINK to={links.login}>
          <LI>Login</LI>
        </LINK>
      </UL>
    </NAV>
  );
};
