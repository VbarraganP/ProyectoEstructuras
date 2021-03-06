import React, { Component } from 'react';
import Heap from "../Estructuras/Heap.js";
import Proveedor from "../Usuarios/Proveedor.js";
import winston from "winston"; 
import firebase from 'firebase';
import datosPlomeria from "../Data/dataProvPlomeria.json"


let heaptest= new Heap(30);
for (let i = 1; i < datosPlomeria.Heap.size + 1; i++) {
    const username = datosPlomeria.Heap.Array[i].username;
    const telefono = datosPlomeria.Heap.Array[i].telefono;
    const correo = datosPlomeria.Heap.Array[i].correo;
    const ciudad = datosPlomeria.Heap.Array[i].ciudad;
    const password = datosPlomeria.Heap.Array[i].password;
    const descripcion = datosPlomeria.Heap.Array[i].descripcion;

    const puntuacion = datosPlomeria.Heap.Array[i].puntuacion;


    heaptest.Insert(username, telefono, correo, ciudad, password, descripcion, puntuacion);
}

let aux = heaptest.HeapSort();
class PlomeriaPostsHeapWithoutFB extends Component {
    
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
                        <td><input type="submit" value="Contratar" className='btn btn-primary btn-block'></input></td> 
                    </tr>
                )}
            </tbody>
            </table>     
            </div>
        )
    }
}
export default PlomeriaPostsHeapWithoutFB; 