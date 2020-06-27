import React, { Component } from 'react';
import Heap from "../Estructuras/Heap.js";
import winston from "winston"; 
import firebase from 'firebase';
import datosCerrajeria from "../Data/dataProvCerrajeria.json";


let heaptest = new Heap(30);
for (let i = 1; i < datosCerrajeria.Heap.size+1; i++) {
    const username = datosCerrajeria.Heap.Array[i].username;
    const telefono = datosCerrajeria.Heap.Array[i].telefono;
    const correo = datosCerrajeria.Heap.Array[i].correo;
    const ciudad = datosCerrajeria.Heap.Array[i].ciudad;
    const password = datosCerrajeria.Heap.Array[i].password;
    const descripcion = datosCerrajeria.Heap.Array[i].descripcion;
    
    const puntuacion = datosCerrajeria.Heap.Array[i].puntuacion;


    heaptest.Insert(username, telefono, correo, ciudad, password, descripcion, puntuacion);
}

let aux=heaptest.HeapSort(); 
class CerrajeriaPostsHeapWithoutFB extends Component {
    constructor(){
        super(); 
        this.state= {
            user:null,
            aux:aux,
        }
    }
    /* componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
          this.setState({user});
        });
    }
    contratar(index){
        let proveedor = this.state.aux[index];
        var db= firebase.firestore(); 
       // var correoCliente = this.state.user.email; 
        alert(index);
       //Funcion que deberia ir en onlick de contratarBTN
        db.collection("Contratos").add({
            correoCliente: "correoCliente",
            correoProveedor: proveedor.correo,
            usernameProveedor: proveedor.username,
            Date: "",
            Servicio: "Cerrajeria"
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        }); */
        
       
       
    //}
    render(){
        const Proveedores = this.state.aux.map((aux,i)=>{
            return(
                <tbody id="tabla">
                        <td>{aux.username}</td>
                        <td>{aux.descripcion}</td>
                        <td>{aux.telefono}</td>
                        <td>{aux.puntuacion}</td>
                        <td><button id ="ContratarBTN" className='btn btn-primary btn-block'  >Contratar</button></td> 
                )
            </tbody>
            )
        })
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
            {
                Proveedores
            }
            </table>     
            </div>
        )
    }
}
export default CerrajeriaPostsHeapWithoutFB; 