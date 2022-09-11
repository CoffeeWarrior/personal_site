import React from "react"
import MoonLanding from "../components/MoonLanding"
import { useState, useEffect } from "react"
import firebaseResources from "../services/firebaseResources"
import read from "../services/read"
import PageContainer from "../components/PageContainer"
import Carousel from "../components/Carousel"

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        read(firebaseResources.home)
        .then(val => {
            setPosts(val.posts)
        })
    }, []) 


    return (
        <PageContainer>
            <MoonLanding></MoonLanding>
            <div className="home">
                <h1>My name is Lucas Goldman</h1>
                <p>I really enjoy programming and solving interesting problems</p>
                <div className="content" >
                        <Carousel posts={posts}></Carousel>
                </div>
            </div>
        </PageContainer>
    )
}

export default Home