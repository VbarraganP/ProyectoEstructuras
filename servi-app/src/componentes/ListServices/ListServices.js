import React, { Component } from 'react'
import ServiceSummary from './ServiceSummary'
import {Link} from 'react-router-dom'

const ListServices = ({services}) => {

    return(
        <div className="text-sm-center">
            {services && services.map(service => {
                return (
                  <Link to={'service/' + service.title} key={service.id}>
                    <ServiceSummary service={service} />
                  </Link>
                );
            })}
        </div>
    )

}
export default ListServices