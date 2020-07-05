import React, { Component } from 'react'
import ServiceSummary from './ServiceSummary'
import {Link} from 'react-router-dom'

const ListServices = ({services}) => {

    return(
        <div>
            <div className="row row-cols-1 row-cols-md-3">
                
                {services && services.map((service,id) => {
                    return (
                        <div className="col mb-4" key={id}>
                            <Link to={'service/' + service.title} >
                                <ServiceSummary service={service} />
                            </Link>
                        </div>
                    );
                })}
            </div>

        </div>
    )

}
export default ListServices