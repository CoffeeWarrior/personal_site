import React, { SyntheticEvent, useRef } from "react";
import read from "../services/read";
import post from "../services/post";
import firebaseResources from "../services/firebaseResources";
import { useState, useEffect } from "react";
import logout from "../services/logout";
import {
  PageContainer,
  PostProps,
  PostInputUpdate,
  UpdatePost,
} from "../components";
import styled from "styled-components";
import { Draggable } from "react-drag-reorder";
import { makePostValid } from "../utils";

type postKeys = keyof PostProps;

const StyledDrag = styled(Draggable)`
  display: flex;
`;

const UpdateSiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vh;
  gap: 20px;
`;

export const UpdateSite = () => {
  const [posts, setPosts] = useState<PostProps[]>([
    { content: "", header: "Write a new post", subheader: "" },
  ]);

  useEffect(() => {
    read(firebaseResources.home).then((newPosts: PostProps[]) => {
      const updatedPosts = [
        ...posts,
        ...newPosts.map((post) => makePostValid(post)),
      ];
      setPosts(updatedPosts);
    });
  }, []);

  const handleDelete = async (index: number) => {
    let posts = refs.current.filter((post, i) => i != index);
    posts = posts.filter((post) => post.content);
    await post(firebaseResources.home, posts);

    window.location.reload();
  };

  const handleUpdateSite = async () => {
    const posts = refs.current.filter((post) => post.content);
    await post(firebaseResources.home, posts);
    window.location.reload();
  };

  const refs = useRef(new Array());

  return (
    <PageContainer>
      <UpdateSiteContainer>
        <h1>Update Site</h1>
        <Draggable
          onPosChange={(currentPos, newPos) => {
            const prevPosts = posts;
            const temp = prevPosts[currentPos];
            prevPosts[currentPos] = prevPosts[newPos];
            prevPosts[newPos] = temp;
            setPosts(prevPosts);
          }}
        >
          {posts.map((post, i) => (
            <UpdatePost
              post={post}
              deletePost={() => handleDelete(i)}
              ref={(element) => {
                refs.current.push(element);
                if (refs.current.length > posts.length) {
                  refs.current.shift();
                }
              }}
            />
          ))}
        </Draggable>
        <button style={{ color: "black" }} onClick={() => handleUpdateSite()}>
          update
        </button>
        <button
          onClick={() => {
            console.log(refs.current);
          }}
        >
          Log ref
        </button>
      </UpdateSiteContainer>
    </PageContainer>
  );
};

/*
 <button style={{ color: "black" }} onClick={() => handleUpdateSite()}>
          update
        </button>
        <button style={{ color: "black" }} onClick={() => logout()}>
          log out
        </button>
*/
