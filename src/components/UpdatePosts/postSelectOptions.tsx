import { MenuItem } from "@mui/material";
import React from "react";
import { PostProps } from "../Post";

export const postSelectOptions = (posts: PostProps[]): JSX.Element[] => {
  return posts.map((post, index) => (
    <MenuItem value={index}>{post.header}</MenuItem>
  ));
};
