import { TextField } from "@mui/material";
import React from "react";
import { PostProps } from "../Post";

type postKeys = keyof PostProps;

type PostInputUpdateProps = {
  postKey: postKeys;
  content: string;
  onChange: Function;
};

export const PostInputUpdate: React.FC<PostInputUpdateProps> = ({
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
