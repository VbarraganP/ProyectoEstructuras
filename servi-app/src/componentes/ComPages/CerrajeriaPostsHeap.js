import React, { Component } from 'react';
import firebase from 'firebase';
import Heap from "../Estructuras/Heap.js";
import proveedor from "../Usuarios/Proveedor.js";
class CerrajeriaPostsHeap extends Component{
    constructor(){
        super();
        this.heap = new Heap (100);
        this.FirebaseToHeap= this.FirebaseToHeap.bind(this);
    }
    FirebaseToHeap(){
        var db= firebase.firestore();
        db.collection("ProveedorCerrajeria").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var username = doc.data().username;
                var telefono = doc.data().telefono; 
                var correo=doc.data().correo; 
                var ciudad = doc.data().correo; 
                var puntuacion = parseInt(doc.data().calificacion); 
                var password = doc.data().contrasena; 
                var descripcion = doc.data().descripcion; 
                var proveedor = new proveedor(username,telefono,correo,ciudad,password,descripcion,puntuacion); 
                this.heap.Insert(proveedor); 
                console.log(ciudad);
            });
        });
        const {items}=this.heap.Array; 
        return (
            <table class="table">
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
            <tr>
                <td>
                    {this.heap.ExtractMax().username}
                </td>
            </tr>
                {/* { items.map(item => 
                    <tr>
                        <td>{item.username}</td>
                        <td>{item.descripcion}</td>
                        <td>{item.telefono}</td>
                        <td>{item.calificacion}</td>
                        <td><input type="submit" value="Contratar" className='btn btn-primary btn-block'></input></td> 
                    </tr>
                )}  */}
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