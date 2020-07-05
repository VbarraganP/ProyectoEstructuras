import React, { Component } from 'react'

const ServiceSummary = ({service}) => {
    return (
        
             
        
            <div className="card h-100"  >
                <div className="card-body">
                    <img src={service.content}  className="card-img " alt="..."></img>
                    <h5 className="card-text"  >{service.title}</h5>
                </div>
                
            </div>
        




    );
}
export default ServiceSummary