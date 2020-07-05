import React, { Component } from 'react'

const ServiceSummary = ({service}) => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card "  >
                    <div className="card-body">
                        <img src={service.content}  className="img-thumbnail " alt="..."></img>
                        <div className="">
                            <h6 className="card-text ">{service.title}</h6>
                        </div>
                    </div>
                </div>

            </div>

        </div>





    );
}
export default ServiceSummary