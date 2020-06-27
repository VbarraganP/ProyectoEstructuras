import React, { Component } from 'react';
import firebase from 'firebase';
import Heap from '../Estructuras/Heap';


class PlomeriaPosts extends Component {
    constructor(){
        super();
        this.state = {
            items : []
        }
    }
    
    componentDidMount(){
        var db = firebase.firestore(); 
        db.collection('ProveedoresCerrajeria').get().then((snapShots)=> {
            this.setState({
                items: snapShots.docs.map( doc => {
                    return {id : doc.id, data: doc.data()}
                 })
            })
        }, error => {
            console.log(error)
        });
    }
    render(){
        let itemssize = this.state.items.length;
        let heap = new Heap(itemssize);
        for (let i =0;i<itemssize;i++){
            heap.Insert(this.state.items[i].data.username,this.state.items[i].data.telefono,this.state.items[i].data.correo,this.state.items[i].data.ciudad,this.state.items[i].data.contrasena,this.state.items[i].data.descripcion,this.state.items[i].data.calificacion);
        }
        const Proveedores = heap.HeapSort().map((aux,i)=>{
            return(
                <tbody id="tabla"key={i}>
                        <td>{aux.username}</td>
                        <td>{aux.descripcion}</td>
                        <td>{aux.telefono}</td>
                        <td>{aux.puntuacion}</td>
                        <td><button id ="ContratarBTN" className='btn btn-primary btn-block'  >Contratar</button></td> 
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
        /*const {items} = this.state; 
        return(
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
                {items && items !== undefined ? items.map((item)=> 
                    <tr>
                        <td>{item.data.username}</td>
                        <td>{item.data.descripcion}</td>
                        <td>{item.data.telefono}</td>
                        <td>{item.data.calificacion}</td>
                        <td><input type="submit" value="Contratar" className='btn btn-primary btn-block'></input></td>
                    </tr>
                ): null}
            </tbody>
        </table>     
        );*/
    };
}
export default PlomeriaPosts; 