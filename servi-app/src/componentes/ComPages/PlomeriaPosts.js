import React, { Component } from 'react';
import firebase from 'firebase';

class PlomeriaPosts extends Component {
    state = {
        items : [] 
    }
    componentDidMount(){
        var db = firebase.firestore(); 
        db.collection('ProveedoresPlomeria').get().then((snapShots)=> {
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
        const {items} = this.state; 
        return(
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
                {items && items !== undefined ? items.map((item,key)=> 
                    <tr key={key}>
                        <td>{item.data.username}</td>
                        <td>{item.data.descripcion}</td>
                        <td>{item.data.telefono}</td>
                        <td>{item.data.calificacion}</td>
                        
                        <td><input type="submit" value="Contratar" className='btn btn-primary btn-block'></input></td>
                    </tr>
                ): null}
            </tbody>
        </table>     
        );
    };
}
export default PlomeriaPosts; 