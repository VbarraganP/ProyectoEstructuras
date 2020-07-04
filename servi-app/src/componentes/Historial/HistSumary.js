import React, { Component } from 'react'

const HistSummary = ({historial}) => {
    return (
      <div className="as1">
        <div className="as1">
            <h6>{historial.calificacionProv}</h6>
            <p>{historial.ciudadProv}</p>
            <p>{historial.correoClient}</p>
            <p>{historial.correoProv}</p>
            <p>{historial.descripcionServicio}</p>
            <p>{historial.detalles}</p>
            <p>{historial.nombreClient}</p>
            <p>{historial.nombreProv}</p>
            <p>{historial.telefonoProv}</p>
            <p>{historial.tipoServicio}</p>
            <p>{historial.creationDate.toDate().toDateString()}</p>
            <p>{historial.estado}</p>
        </div>
      </div>
    );
}
export default HistSummary
