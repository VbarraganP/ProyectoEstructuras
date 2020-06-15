import React, { Component} from "react";
import firebase from "firebase";

//paginas derivadas
import Services from "./Services.js";
import Posts from "./Posts.js";
import EditProfile from "./EditProfile.js";
import Navigation from "./Navigation";
import PlomeriaPosts from "./PlomeriaPosts.js";
import ElectricistaPosts from "./ElectricistaPosts.js";
import CerrajeriaPostsHeap from "./CerrajeriaPostsHeap.js";
import CerrajeriaPostsHeapWithoutFB from "./CerrajeriaPostsHeapWithoutFB.js";
import PlomeriaPostsHeapWithoutFB from "./PlomeriaPostsHeapWihoutFB.js"; 
import ElectricistaPostsHeapWithoutFB from "./ElectricistaPostsHeapWithoutFB.js";

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import FileUpload from "./FileUpload.js";
import CerrajeriaPosts from "./CerrajeriaPosts.js";

const BodyStatus = 'null';

class BodyPages extends Component {



    renderWithBodyStatus(){
        
        return(
            <BrowserRouter>

                <Navigation/>

                <div className = "container mt-5">
              
                  
                    <hr/>
                    <Switch>
                        <Route path="/Services">
                            <Services/>
                        </Route>

                        <Route path="/EditProfile">
                            <EditProfile/>
                        </Route>

                        <Route path="/CerrajeriaPostsHeapWithoutFB">
                            <CerrajeriaPostsHeapWithoutFB/>
                        </Route>
 
                        <Route path="/PlomeriaPostsHeapWithoutFB">
                            <PlomeriaPostsHeapWithoutFB/>
                        </Route>

                        <Route path="/ElectricistaPostsHeapWithoutFB">
                            <ElectricistaPostsHeapWithoutFB/>
                        </Route>

                        <Route path="/FileUpload">
                            <FileUpload/>
                        </Route>
                    </Switch>

                </div>
            </BrowserRouter>

        );
    }
    render() {
        return (
            <div>
                {this.renderWithBodyStatus()}
            </div>
        )
    }

        
};

export default BodyPages;