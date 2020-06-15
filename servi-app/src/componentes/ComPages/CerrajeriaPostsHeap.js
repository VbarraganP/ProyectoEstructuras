import React, { Component } from 'react';
import firebase from 'firebase';
import Heap from "../Estructuras/Heap.js";
import Proveedor from "../Usuarios/Proveedor.js";

import winston from "winston";

var username = "";
var telefono = ""; 
var correo=""; 
var ciudad = ""; 
var puntuacion = ""; 
var password = ""; 
var descripcion = ""; 
//var proveedor = "";  


class CerrajeriaPostsHeap extends Component{
      


    constructor(){
        super();
        this.heap = new Heap (10);
        this.FirebaseToHeap= this.FirebaseToHeap.bind(this);
    }
    FirebaseToHeap(){
        var db= firebase.firestore();
        db.collection("ProveedoresCerrajeria").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                    username = doc.data().username;
                    telefono = doc.data().telefono; 
                    correo=doc.data().correo; 
                    ciudad = doc.data().ciudad; 
                    puntuacion = parseInt(doc.data().calificacion); 
                    password = doc.data().contrasena; 
                    descripcion = doc.data().descripcion; 
                    var proveedor = new Proveedor(username,telefono,correo,ciudad,password,descripcion,puntuacion);
                    console.log(proveedor); 
                    this.heap.Insert(proveedor);
            });
        });
        
    

        console.log(this.heap.Array);
        return (
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Proveedor</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Telefono</th>
                <th scope="col">Calificación</th>
                <th scope ="col">Contratar</th>
                </tr>
            </thead>
            <tbody id="tabla">
                {this.heap.Array.map((proveedor,key) =>
                    <tr key={key}>
                        <td>{proveedor.username}</td>
                        <td>{proveedor.descripcion}</td>
                        <td>{proveedor.telefono}</td>
                        <td>{proveedor.puntuacion}</td>
                        <td><input type="submit" value="Contratar" className='btn btn-primary btn-block'></input></td> 
                    </tr>
                )}
            </tbody>
            </table>     
        )
    }
    render(){
        return(
        <div>{this.FirebaseToHeap()}</div>   
        );
    }
}
export default CerrajeriaPostsHeap; 