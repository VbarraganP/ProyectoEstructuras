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

let aux=heaptest.Array; 

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
    contratar(){
        
        /*
        var db= firebase.firestore(); 
       // var correoCliente = this.state.user.email; 

       //Funcion que deberia ir en onlick de contratarBTN
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
        */
       
       
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
                        <td><button id="contratarBTN" className='btn btn-primary btn-block' onClick={this.contratar} >Contratar</button></td> 
                    </tr>
                )}
            </tbody>
            </table>     
            </div>
        )
    }
}
export default CerrajeriaPostsHeapWithoutFB; 