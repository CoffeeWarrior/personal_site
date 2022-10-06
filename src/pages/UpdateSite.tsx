import React, { SyntheticEvent } from "react";
import read from "../services/read";
import post from "../services/post";
import firebaseResources from "../services/firebaseResources";
import { useState, useEffect } from "react";
import logout from "../services/logout";
import { PageContainer, PostProps } from "../components";
import { TextField, Select, MenuItem } from "@mui/material";
import { colors } from "../styling";

type postKeys = keyof PostProps;

export const UpdateSite = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [selectedPost, setSelectedPost] = useState<number>(0);

  // useEffect(() => {
  //   if (selectedPost < posts.length) {
  //     setUpdatedPost(posts[selectedPost]);
  //   } else {
  //     setUpdatedPost(defaultPost);
  //   }
  // }, [selectedPost]);

  useEffect(() => {
    read(firebaseResources.home).then((posts: PostProps[]) => {
      setPosts(posts);
    });
  }, []);

  // const addPost = async () => {
  //   await post(firebaseResources.home, newPosts);
  //   window.location.reload();
  // };

  const postUpdate = (postKey: postKeys, updatedContent: string) => {
    const newPosts: PostProps[] = [...posts];
    newPosts[selectedPost][postKey] = updatedContent;
    setPosts(newPosts);
    console.log("set new posts");
  };

  return (
    <PageContainer>
      <h1>Update Site</h1>
      <TextField
        sx={{ background: "rgba(155, 155, 155, .4)" }}
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        value={posts[selectedPost]?.["content"]}
        onChange={(e) => postUpdate("content", e.currentTarget.value)}
      />
      <button onClick={() => logout()}>log out</button>
    </PageContainer>
  );
};
