import React, { Component } from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";

const ListServices = ({ posts }) => {
  return (
    <div className="text-sm-center">
      {posts &&
        posts.map((post) => {
          return (
            <Link to={'/services'}>
              <PostSummary post={post} key={post.id} />
            </Link>
          );
        })}
    </div>
  );
};
export default ListServices;
