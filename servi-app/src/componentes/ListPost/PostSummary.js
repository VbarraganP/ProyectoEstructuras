import React, { Component } from "react";

const PostSummary = ({ post }) => {
  return (
    <div className="as">
      <div className="as">
        <h6>{post.title}</h6>
        <p>{post.content}</p>
      </div>
    </div>
  );
};
export default PostSummary;
