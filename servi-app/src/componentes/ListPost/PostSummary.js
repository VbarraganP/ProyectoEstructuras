import React, { Component } from "react";

const PostSummary = ({ post }) => {
  return (
    <div className="as">
      <div className="card">
        <h5 className="card-title">{post.puntuacion}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{post.username}</h6>
        <p className="card-text">{post.descripcion}</p>
      </div>
    </div>
  );
};
export default PostSummary;
