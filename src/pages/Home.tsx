import React from "react";
import { MoonLanding } from "../components";
import { useState, useEffect } from "react";
import firebaseResources from "../services/firebaseResources";
import read from "../services/read";
import PageContainer from "../components/PageContainer";
import { Timeline } from "../components/Timeline/Timeline";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    read(firebaseResources.home).then((val) => {
      setPosts(val.posts);
    });
  }, []);

  return (
    <PageContainer>
      {/* <MoonLanding></MoonLanding> */}
      <Timeline></Timeline>
    </PageContainer>
  );
};

export default Home;
