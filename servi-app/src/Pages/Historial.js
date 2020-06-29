
import React, { Component } from 'react';
import {historial} from "../Data/dataHistorial.json";

class FileUpload extends Component {
    constructor() {
        super();
        this.state = {
            historial
        };
    }

    removerHistorial(index){
        if(index == 0){
            this.setState({
                historial: this.state.historial.filter((e, i) => {
                    return i !== index;
                })
            })
        } else {
            return alert("Stack: Solo puedes cancelar el ultimo contrato en curso");
        }
    }


    render() {
        const historial=this.state.historial.map((historial,i)=>{
            return(
                <tbody id="tabla">
                    <td>{historial.username}</td>
                    <td>{historial.descripcion}</td>
                    <td>{historial.telefono}</td>
                    <td>{historial.puntuacion}</td>
                    <td><button id="CancelarBTN" className='btn btn-danger btn-block' onClick={this.removerHistorial.bind(this,i)} >Cancelar</button></td>
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
                            <th scope="col">Contratar</th>
                        </tr>
                    </thead>
                    {historial}
                </table>
            </div>
        )
    }
}

export default FileUpload;