import React, { Component } from "react";

const PostSummary = ({ post}) => {
  return (
    <div className="" style={{margin:20}}>
      <div className="card">
        <div className="card-body">
          <div className="float-left" style={{ marginRight: 30 }}>
            <h5 className="card-subtitle mb-2 text-muted ">{"Usuario:  " + post.username} </h5>
            <h2 className="text-color:black" style={{ marginRight: 20, color: 'black' }}>{post.puntuacion}</h2>
          </div>
          <div className="container ">
            <p className="card-text center" style={{ color: 'black', margin: 'auto' }}>{post.descripcion}</p>
            <button className="btn btn-info" style={{ marginTop: 30 }}> Detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostSummary;
