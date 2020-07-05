import React, { useState } from 'react'

const HistSummary = ({historial}) => {
  const [state,setState] = useState({showInfo:false})
    return (
      <div className="as1">
        <div className="as1">
            <h6>{historial.calificacionProv}</h6>
            <p>{historial.tipoServicio}</p>
            <p>{historial.ciudadProv}</p>
            <p>{historial.correoClient}</p>
            <p>{historial.correoProv}</p>
            {
            state.showInfo==true ? 
              <div>
              <p>{historial.descripcionServicio}</p>
              <p>{historial.detalles}</p>
              <p>{historial.telefonoProv}</p>
              <p>{historial.creationDate.toDate().toDateString()}</p> 
              </div>
              : null 
            }        
            {/* <button onClick={() => setState({...state,showInfo:true})}>Ver</button> */}
            <button onClick={() => {
                if(state.showInfo){
                  setState({...state,showInfo:false})
                }else {
                  setState({...state,showInfo:true})
                }
            }}>Ver</button> 
            {historial.estado=="ACTIVO" ? <button>Finalizar</button>:null }
        </div>
      </div>
    );
}
export default HistSummary
