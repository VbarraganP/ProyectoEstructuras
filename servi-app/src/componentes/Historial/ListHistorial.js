import React, { Component } from 'react'
// import HistorialSummary from './HistorialSummary'
import {Link} from 'react-router-dom'
import HistSummary from './HistSumary'

const ListHistorial = ({historial}) => {

    return(
        <div className="text-sm-center">
            {historial && historial.map(historial => {
                return (
                  <a  key={historial.id}>
                    -------
                    {/* {console.log(historial)} */}
                    
                    <HistSummary historial={historial} />
                    
                    -------
                  </a>
                );
            })}
        </div>
    )

}
export default ListHistorial