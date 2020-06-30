import React, { Component } from 'react'

const HistSummary = ({historial}) => {
    return (
      <div className="as1">
        <div className="as1">
          <h6>{historial.proveedor}</h6>
          <p>{historial.usuario}</p>
          <p>{historial.fecha}</p>
        </div>
      </div>
    );
}
export default HistSummary
