import React, { Component } from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";
import Heap from "../../Estructuras/Heap";


const ListPosts = ({ posts,id }) => {
  let Ht = new Heap(10);
  posts && posts.map((post) => {
      if(id==post.servicio){
          let user = post.usuario
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
    <div >
      {posts1 && 
        posts1.map((post,id) => {
        //  if()
            return (
              <Link to={'/Post/'+ post.correo} key={id} style={{textDecoration: 'none'}}>
                <PostSummary post={post}/>
              </Link>
            )
          }
        )}
    </div>
  );
};
export default ListPosts;
