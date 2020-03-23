//Complete the necessary code in this file
// import useState
import "../../dummy-data.js"
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [postCount] = useState(dummyData)
  
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {postCount.map((post => {
       return <Post post = {post}/>
      }))}
    </div>
  );
};

export default PostsPage;