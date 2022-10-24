import { PostProps } from "../Timeline/Post";
import React, { useState } from "react";
import { PostInputUpdate } from "./PostInputUpdate";
import { Flexbox } from "../../styling";
import styled from "styled-components";

type UpdatePostsProps = {
  post: PostProps;
  onChange: Function;
};

type postKeys = keyof PostProps;

const ColumnFlexbox = styled(Flexbox)`
  flex-direction: column;
`;

export const UpdatePost: React.FC<UpdatePostsProps> = ({ post, onChange }) => {
  const [updateVisible, setUpdateVisible] = useState(false);

  const postUpdateInputsByKeys = (
    <ColumnFlexbox>
      {(Object.keys(post) as Array<postKeys>).map(
        (postKey: postKeys, index) => {
          return (
            <PostInputUpdate
              key={postKey + index}
              postKey={postKey}
              content={post[postKey]}
              onChange={onChange}
            />
          );
        }
      )}
    </ColumnFlexbox>
  );

  return (
    <>
      <h1 onClick={() => setUpdateVisible(!updateVisible)}>{post.header}</h1>
      {updateVisible && postUpdateInputsByKeys}
    </>
  );
};
