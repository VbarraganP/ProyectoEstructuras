import React, { Component } from 'react'

const ServiceSummary = ({service}) => {
    return (
      <div className="as">
        <div className="as">
          <h6>{service.title}</h6>
          <p>{service.content}</p>
        </div>
      </div>
    );
}
export default ServiceSummary