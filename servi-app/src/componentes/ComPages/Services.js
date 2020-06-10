import React, { Component } from "react";
//import firebase from "firebase";
import DoorKey from "../../resources/doorKey.jpg";
import Electrical from "../../resources/Electrical.jpg";
import Faucets from "../../resources/Faucets.jpg";



class Services extends Component {
    
    render() {
        return (
            <div >
                <div className="container">
                    <h1>¿Quiénes somos?</h1>  
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quibusdam enim consectetur? Suscipit reiciendis fuga quibusdam distinctio natus doloremque exercitationem repellendus doloribus consectetur hic quasi assumenda, nesciunt culpa beatae sunt!
                    </p>
                    <h1>Nuestros Servicios</h1>
                    <div className="row">
                        <div className="col-sm">
                            <img src={DoorKey} className="" height="200px" width="100%"/>
                            <a href="" className="" >
                                Cerrajería
                            </a>
                        </div>
                        <div className="col-sm">
                            <img src={Faucets} className="" height="200px" width="100%" />
                            <a href="" className="" >
                                Plomeria
                            </a>
                        </div>
                        <div className="col-sm">
                            <img src={Electrical} className="" height="200px" width="100%" />
                            <a href="" className="" >
                                Electrico
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Services;