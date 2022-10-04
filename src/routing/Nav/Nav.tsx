import React from "react";
import links from "../links/links";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <Link to={links.home}>
          <li>Home</li>
        </Link>
        {/* <Link to={links.projects}><li>Projects</li></Link> */}
        <Link to={links.resume}>
          <li>Resume</li>
        </Link>
        <Link to={links.contact}>
          <li>Contact</li>
        </Link>
        {/* <Link to={links.myFeed}><li>My Feed</li></Link> */}
        <Link to={links.login}>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};
