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