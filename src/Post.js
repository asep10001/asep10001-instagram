import { Avatar } from "@material-ui/core";
import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="AsepAgusHeriH"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      {/* Header -> avatar + username */}
      <img
        className="post__image"
        src="https://i.morioh.com/644d5dcb49.png"
        alt=""
      />
      {/* image */}
      <h4 className="post__text">
        <strong>asep</strong> day three oke
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
