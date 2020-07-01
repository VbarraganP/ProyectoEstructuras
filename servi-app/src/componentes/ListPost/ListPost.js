import React, { Component } from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";

const ListPosts = ({ posts,id }) => {
  
  return (
    <div className="text-sm-center">
      {posts && 
        posts.map((post) => {
          if(id==post.servicio){
            return (
              <Link to={""} key={""}>
                <PostSummary post={post} />
              </Link>
            )
          }
        })}
    </div>
  );
};
export default ListPosts;
