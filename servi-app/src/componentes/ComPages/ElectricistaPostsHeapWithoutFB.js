import React, { Component } from 'react';
import Heap from "../Estructuras/Heap.js";
import Proveedor from "../Usuarios/Proveedor.js";
import winston from "winston"; 
import firebase from 'firebase';
import datosElectricista from "../Data/dataProvElectricista.json"


let heaptest= new Heap(30);
for (let i = 1; i < datosElectricista.Heap.size + 1; i++) {
    const username = datosElectricista.Heap.Array[i].username;
    const telefono = datosElectricista.Heap.Array[i].telefono;
    const correo = datosElectricista.Heap.Array[i].correo;
    const ciudad = datosElectricista.Heap.Array[i].ciudad;
    const password = datosElectricista.Heap.Array[i].password;
    const descripcion = datosElectricista.Heap.Array[i].descripcion;

    const puntuacion = datosElectricista.Heap.Array[i].puntuacion;


    heaptest.Insert(username, telefono, correo, ciudad, password, descripcion, puntuacion);
}
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
class ElectricistaPostsHeapWithoutFB extends Component {
    
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
export default ElectricistaPostsHeapWithoutFB; 