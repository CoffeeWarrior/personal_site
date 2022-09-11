import React from "react"
import read from "../services/read"
import post from "../services/post"
import firebaseResources from "../services/firebaseResources"
import { useState, useEffect } from "react"
import logout from "../services/logout"

const UpdateSite = () => {

    const LinkOptions = Object.keys(firebaseResources).map((key) => {
        return <option value={firebaseResources[key]}>{firebaseResources[key]}</option>
    });
    const [selectedLink, setSelectedLink] = useState(firebaseResources.home);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(-1);
    const [updatedPost, setUpdatedPost] = useState("")

    useEffect(() => {
        read(selectedLink)
        .then(val => {
            setPosts(val.posts)
            setSelectedPost(val.posts.length)
        })
    }, [selectedLink])

    useEffect(() => {
        if(selectedPost < posts.length){
            setUpdatedPost(posts[selectedPost])
        } else {
            setUpdatedPost("")
        }
    }, [selectedPost, selectedLink])


    const addPost = async() => {
        let newPosts = [...posts]
        newPosts[selectedPost] = updatedPost;
        console.log(newPosts)
        await post(selectedLink, newPosts)
        setSelectedLink(firebaseResources.home)
        window.location.reload();
    }

    
    return (
        <div className={"UpdateSite"}>
            <h1>Update Site</h1>
            <select className={"select"} onChange={(event) => {setSelectedLink(event.target.value)}} value={selectedLink}>
                {LinkOptions}
            </select>
            <select className={"select"} onChange={event => setSelectedPost(event.target.value)}>
                <option value={posts.length}>Write a new post</option>
                {posts.map((val, index) => {
                    return <option value={index}>{index}</option>
                } )}
            </select>
            <textarea value={updatedPost} onChange={e => setUpdatedPost(e.target.value)}>
            </textarea>
            <button onClick={() => addPost()}>add post</button>
            <button onClick={() => logout()}>log out</button>
        </div>
        
    
    
    )
}

export default UpdateSite;