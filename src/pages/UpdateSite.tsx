import React, { SyntheticEvent } from "react";
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
import { InputLabel, MenuItem, Select } from "@mui/material";
import { postSelectOptions } from "../components/UpdatePosts/postSelectOptions";
import { sortPostsByYear } from "../utils";
import { Draggable } from "react-drag-reorder";

type postKeys = keyof PostProps;

const UpdateSiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

//I need to map all the objects in the array.
//Each object has a header
//display a list of headers - when clicked on they reveal the update properties of the obj
//each header is drag/droppable w/ library

export const UpdateSite = () => {
  const [posts, setPosts] = useState<PostProps[]>([
    { content: "", header: "" },
  ]);
  const [selectedPost, setSelectedPost] = useState<number>(0);

  useEffect(() => {
    read(firebaseResources.home).then((posts: PostProps[]) => {
      setPosts(posts);
    });
  }, []);

  const handleUpdateSite = async () => {
    await post(firebaseResources.home, posts);
    window.location.reload();
  };

  const handlePostUpdate = (
    postKey: postKeys,
    event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
    selectedPost: number
  ) => {
    const newPosts: PostProps[] = [...posts];
    newPosts[selectedPost][postKey] = event.currentTarget.value;
    setPosts(newPosts);
    console.log(newPosts);
  };

  // const postUpdateInputsByKeys = (
  //   Object.keys(posts[selectedPost]) as Array<postKeys>
  // ).map((postKey: postKeys, index) => {
  //   return (
  //     <PostInputUpdate
  //       key={postKey + index}
  //       postKey={postKey}
  //       content={posts[selectedPost][postKey]}
  //       onChange={handlePostUpdate}
  //     />
  //   );
  // });

  // const handleSelectedPostChange = (updatedSelectedPost: number) => {
  //   if (updatedSelectedPost === posts.length) {
  //     setPosts((prevState) => [
  //       ...prevState,
  //       { content: "", header: "", technology: "" },
  //     ]);
  //   }
  //   setSelectedPost(updatedSelectedPost);
  // };

  return (
    <PageContainer>
      <UpdateSiteContainer>
        <h1>Update Site</h1>
        {/* <InputLabel id="demo-simple-select-label">Selected Post</InputLabel> */}
        {/* <Select
          id="demo-simple-select"
          value={selectedPost}
          onChange={(e) =>
            handleSelectedPostChange(parseInt("" + e.target.value))
          }
          sx={{ color: "black" }}
        >
          {postSelectOptions(posts)}
          <MenuItem value={posts.length}>Write a new post</MenuItem>
        </Select> */}
        <Draggable
          onPosChange={(currentPos, newPos) => {
            const prevPosts = posts;
            const temp = prevPosts[currentPos];
            prevPosts[currentPos] = prevPosts[newPos];
            prevPosts[newPos] = temp;
            setPosts(prevPosts);
            console.log(posts);
          }}
        >
          {posts.map((post, i) => (
            <UpdatePost
              post={post}
              onChange={(
                postKey: postKeys,
                e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                handlePostUpdate(postKey, e, i);
              }}
            />
          ))}
        </Draggable>
        <button style={{ color: "black" }} onClick={() => handleUpdateSite()}>
          update
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
