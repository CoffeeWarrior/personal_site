import { TextField } from "@mui/material";
import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import { colors } from "../styling";
import { PostProps } from "./Timeline/Post";

type postKeys = keyof PostProps;

type PostUpdateProps = {
  postKey: postKeys;
  content: string;
  onChange: Function;
};

export const PostUpdate: React.FC<PostUpdateProps> = ({
  postKey,
  content,
  onChange,
}) => {
  return (
    <TextField
      id="outlined-multiline-flexible"
      label={postKey}
      multiline
      onBlur={(e) => onChange(postKey, e)}
      // maxRows={4}
      defaultValue={content}
      // onChange={(e) => onChange("content", e.currentTarget.value)}
    />
  );
};