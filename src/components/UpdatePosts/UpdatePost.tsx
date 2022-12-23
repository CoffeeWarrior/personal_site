import { PostProps } from "../Post";
import React, { SyntheticEvent, useImperativeHandle, useState } from "react";
import { PostInputUpdate } from "./PostInputUpdate";
import { Flexbox } from "../../styling";
import styled from "styled-components";

type UpdatePostsProps = {
  post: PostProps;
  deletePost: Function;
};

type postKeys = keyof PostProps;

const ColumnFlexbox = styled(Flexbox)`
  flex-direction: column;
`;

const UpdatePostWrapper = styled.div``;

export const UpdatePost = React.forwardRef<PostProps, UpdatePostsProps>(
  ({ post, deletePost }, ref: React.Ref<PostProps>) => {
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

    const handleDelete = () => {
      setPostState({ content: "", header: "", subheader: "" });
      console.log(postState);
      deletePost();
    };

    const postUpdateInputsByKeys = (
      <ColumnFlexbox>
        {(Object.keys(post) as Array<postKeys>).map(
          (postKey: postKeys, index) => {
            return (
              <>
                <PostInputUpdate
                  key={postKey + index}
                  postKey={postKey}
                  content={post[postKey] ?? ""}
                  onChange={handlePostUpdate}
                />
              </>
            );
          }
        )}
        <button onClick={() => deletePost()}>Delete</button>
      </ColumnFlexbox>
    );

    return (
      <UpdatePostWrapper>
        <h2 onClick={() => setUpdateVisible(!updateVisible)}>{post.header}</h2>
        {updateVisible && postUpdateInputsByKeys}
      </UpdatePostWrapper>
    );
  }
);
