import React, { Component } from 'react';
import Heap from "../Estructuras/Heap.js";
import Proveedor from "../Usuarios/Proveedor.js";
import winston from "winston"; 
import firebase from 'firebase';

let heaptest= new Heap(1);
let proveedor1 = new Proveedor("Felipe Rojas","3213868636","jrojasce@unal.edu.co","Zipaquira","1234567","Los mejores cerrajeros",4.2); 
let proveedor2 = new Proveedor("Victor B","3213868635","vbarragan@unal.edu.co","Bogota","1234567","Los peores cerrajeros",1.2); 
let proveedor3 = new Proveedor("Leandro","3213868634","lgomez@unal.edu.co","Bogota","1234567","cerrajeros",5); 
let proveedor4 = new Proveedor("Felipe Rojas","3213868636","jrojasce@unal.edu.co","Zipaquira","1234567","Los mejores cerrajeros",4.2); 
let proveedor5 = new Proveedor("Victor B","3213868635","vbarragan@unal.edu.co","Bogota","1234567","Los peores cerrajeros",1.2); 
let proveedor6 = new Proveedor("Leandro","3213868634","lgomez@unal.edu.co","Bogota","1234567","cerrajeros",5); 
heaptest.Insert(proveedor1); 
heaptest.Insert(proveedor2); 
heaptest.Insert(proveedor3); 
heaptest.Insert(proveedor4); 
heaptest.Insert(proveedor5); 
heaptest.Insert(proveedor6); 
let aux = new Array(1); 
aux=heaptest.Array; 
aux.sort(function(a,b){
    if(a.puntuacion<b.puntuacion){
        return 1; 
    }else if(a.puntuacion>b.puntuacion){
        return -1; 
    }
    return 0; 
});
class CerrajeriaPostsHeapWithoutFB extends Component {
    constructor(){
        super(); 
        this.state= {
            user:null, 
        }
        this.contratar= this.contratar.bind(this);
        this.handleAuth=this.handleAuth.bind(this);
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
          this.setState({user});
        });
    }
    handleAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => console.log(`${result.user.email} ha iniciado sesion`))
          .catch((error) => console.log(`Error ${error.code}:{error.message}`));
    }
    contratar(usernameProveedor,correoProveedor){
        var db= firebase.firestore(); 
       // var correoCliente = this.state.user.email; 
        db.collection("Contratos").add({
            correoCliente: "correoCliente",
            correoProveedor: correoProveedor,
            usernameProveedor: usernameProveedor,
            Date: "",
            Servicio: "Cerrajeria"
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    render(){
        return (
            <div>
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
                {aux.map((proveedor,key) =>
                    <tr key={key}>
                        <td>{proveedor.username}</td>
                        <td>{proveedor.descripcion}</td>
                        <td>{proveedor.telefono}</td>
                        <td>{proveedor.puntuacion}</td>
                        <td><button className='btn btn-primary btn-block' /* onClick={this.contratar(proveedor.username,proveedor.correo)} */>Contratar</button></td> 
                    </tr>
                )}
            </tbody>
            </table>     
            </div>
        )
    }
}
export default CerrajeriaPostsHeapWithoutFB; 