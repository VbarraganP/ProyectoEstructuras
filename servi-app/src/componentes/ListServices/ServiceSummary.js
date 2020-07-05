import React, { Component } from 'react'

const ServiceSummary = ({service}) => {
    return (
      <div className="card w-50"  >
          <img src={service.content}  className="img-thumbnail w-50" alt="..."></img>
        <div className="w-50 ">
          <h6 className="card-text">{service.title}</h6>
        </div>
      </div>
    );
}
export default ServiceSummary