import React, { Component } from 'react';
import firebase from 'firebase';


class UsuariosPosts extends Component {
    state = {
        items : [] 
    }
    componentDidMount(){
        var db = firebase.firestore(); 
        db.collection('usuarios').get().then((snapShots)=> {
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
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Telefono</th>
                <th scope="col">Ciudad</th>

                </tr>
            </thead>
            <tbody id="tabla">
                {items && items !== undefined ? items.map((item,key)=> 
                    <tr key={key}>
                        <td>{item.data.username}</td>
                        <td>{item.data.correo}</td>
                        <td>{item.data.telefono}</td>
                        <td>{item.data.ciudad}</td>
                     
                    </tr>
                ): null}
            </tbody>
        </table>     
        );
    };
}
export default UsuariosPosts; 