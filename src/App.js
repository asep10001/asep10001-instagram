import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const[posts, setPosts] = useState([
    {
      imageUrl:"https://www.adweek.com/wp-content/uploads/2017/02/Facebook-Logo.jpg",
      username:"Asep Agus",
      caption:"Wow it works"
    },
    {
      imageUrl:"https://www.cbronline.com/wp-content/uploads/2016/06/linkedin.jpg",
      username:"Asep Agus",
      caption:"Wow it works",
    },
    {
      imageUrl: "https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png",
      username: "Agus ",
      caption: "Wow it works 3",
    }
  ]);
  return (
    <div className="App">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          className="app__headerImage"
        />
      </div>
      {posts.map(post =>      <Post
        imageUrl={post.imageUrl}
        username={post.username}
        caption={post.caption}
      />)}

      {/* posts */}
    </div>
  );
}

export default App;
