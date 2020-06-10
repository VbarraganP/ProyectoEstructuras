import React, { Component} from "react";
import firebase from "firebase";

//paginas derivadas
import Services from "./Services.js";
import Posts from "./Posts.js";
import EditProfile from "./EditProfile.js";

const BodyStatus = 'null';

class BodyPages extends Component {
    
    renderWithBodyStatus(){
        if (BodyStatus == 'Services') {
            return (
                <div>
                    <Services />
                </div>
            )

        } else if (BodyStatus == 'Posts') {
            return (
                <div>
                    <Posts />
                </div>
            )

        } else if (BodyStatus == 'EditProfile') {
            return (
                <div>
                    <EditProfile />
                </div>
            )

        } else {
            return (
                <div>
                    
                    <Services />
                </div>
            )
        };
        
    }
    
    //gestor de estados
    render() {
        return (
            <div>
                {this.renderWithBodyStatus()}
            </div>
        )
    }
};

export default BodyPages;