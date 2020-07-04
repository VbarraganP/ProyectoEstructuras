import React, { Component } from 'react'
// import HistorialSummary from './HistorialSummary'
import {Link} from 'react-router-dom'
import HistSummary from './HistSumary'

const ListHistorialInactive = ({historial}) => {

    return(

        <div className="text-sm-center">
            <div>
                {console.log(historial , "IN LISTHISTORI") }
            </div>
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
export default ListHistorialInactive