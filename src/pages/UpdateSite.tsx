import React, { SyntheticEvent } from "react";
import read from "../services/read";
import post from "../services/post";
import firebaseResources from "../services/firebaseResources";
import { useState, useEffect } from "react";
import logout from "../services/logout";
import { PageContainer, PostProps, PostUpdate } from "../components";
import styled from "styled-components";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { colors } from "../styling";
import { PostUpdateOptions } from "../components/postUpdateOptions";
import { sortPostsByYear } from "../utils";

type postKeys = keyof PostProps;

const UpdateSiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${colors.blue};
`;

export const UpdateSite = () => {
  const [posts, setPosts] = useState<PostProps[]>([
    { content: "", header: "", technology: "" },
  ]);
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
      setPosts(posts.sort(sortPostsByYear));
    });
  }, []);

  // const addPost = async () => {
  //   await post(firebaseResources.home, newPosts);
  //   window.location.reload();
  // };

  const postUpdate = (
    postKey: postKeys,
    event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newPosts: PostProps[] = [...posts];
    newPosts[selectedPost][postKey] = event.currentTarget.value;
    setPosts(newPosts);
    console.log(newPosts);
  };

  const postKeysUpdate = (
    Object.keys(posts[selectedPost]) as Array<postKeys>
  ).map((postKey: postKeys, index) => {
    return (
      <PostUpdate
        key={postKey + index}
        postKey={postKey}
        content={posts[selectedPost][postKey]}
        onChange={postUpdate}
      />
    );
  });

  const selectPostOptions = PostUpdateOptions(posts);

  const handlePostChange = (updatedSelectedPost: string | number) => {
    if (updatedSelectedPost == posts.length) {
      setPosts((prevState) => [
        ...prevState,
        { content: "", header: "", technology: "" },
      ]);
    }
    setSelectedPost(parseInt("" + updatedSelectedPost));
  };

  const postOptions = PostUpdateOptions(posts);

  return (
    <PageContainer>
      <UpdateSiteContainer>
        <h1>Update Site</h1>
        <InputLabel id="demo-simple-select-label">Selected Post</InputLabel>
        <Select
          id="demo-simple-select"
          value={selectedPost}
          onChange={(e) => handlePostChange(e.target.value)}
          sx={{ color: "black" }}
        >
          {postOptions}
          <MenuItem value={posts.length}>Write a new post</MenuItem>
        </Select>
        {postKeysUpdate}
        <button style={{ color: "black" }} onClick={() => logout()}>
          log out
        </button>
      </UpdateSiteContainer>
    </PageContainer>
  );
};
