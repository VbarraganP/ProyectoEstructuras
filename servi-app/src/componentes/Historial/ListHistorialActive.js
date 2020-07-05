import React, { Component } from 'react'
// import HistorialSummary from './HistorialSummary'
import {Link} from 'react-router-dom'
import HistSummary from './HistSumary'

const ListHistorialActive = ({historial}) => {

    return(
        <div className="text-sm-center">
            {historial && historial.map(historial => {
                return (
                
                <a  key={historial.id}>
                    <HistSummary historial={historial} />
                </a>

                


                );
            })}
        </div>
    )

}
export default ListHistorialActive