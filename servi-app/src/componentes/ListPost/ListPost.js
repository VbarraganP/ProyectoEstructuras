import React, { Component } from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";
import Heap from "../../Estructuras/Heap";


const ListPosts = ({ posts,id }) => {
  let Ht = new Heap(10);
  posts && posts.map((post) => {
      if(id==post.servicio){
          let user = "prueba Cambiar"
          let tel = post.telefono
          let correo = post.correo
          let ciudad = post.ciudad
          let descripcion = post.descripcion
          let puntuacion = post.calificacion
          Ht.Insert(user, tel, correo, ciudad, descripcion, puntuacion)
      }
    })
  const posts1 = Ht.HeapSort()
  return (
    <div className="text-sm-center">
      {posts1 && 
        posts1.map((post,key) => {
            return (
              <Link to={""} key={post.calificacion}>
                <PostSummary post={post} />
              </Link>
            )
          }
        )}
    </div>
  );
};
export default ListPosts;
