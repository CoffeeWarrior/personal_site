import { PostProps } from "../Timeline/Post";
import React, { SyntheticEvent, useImperativeHandle, useState } from "react";
import { PostInputUpdate } from "./PostInputUpdate";
import { Flexbox } from "../../styling";
import styled from "styled-components";

type UpdatePostsProps = {
  post: PostProps;
};

type postKeys = keyof PostProps;

const ColumnFlexbox = styled(Flexbox)`
  flex-direction: column;
`;

export const UpdatePost = React.forwardRef<PostProps, UpdatePostsProps>(
  ({ post }, ref: React.Ref<PostProps>) => {
    const [updateVisible, setUpdateVisible] = useState(false);
    const [postState, setPostState] = useState<PostProps>(post);

    useImperativeHandle(ref, () => postState, []);

    const handlePostUpdate = (
      postKey: postKeys,
      event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const newPost: PostProps = postState;
      newPost[postKey] = event.currentTarget.value;
      setPostState(newPost);
    };

    const postUpdateInputsByKeys = (
      <ColumnFlexbox>
        {(Object.keys(post) as Array<postKeys>).map(
          (postKey: postKeys, index) => {
            return (
              <PostInputUpdate
                key={postKey + index}
                postKey={postKey}
                content={post[postKey]}
                onChange={handlePostUpdate}
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
  }
);
