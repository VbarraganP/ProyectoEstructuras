import React, { Component} from "react";
import firebase from "firebase";

//paginas derivadas
import Services from "./Services.js";
import Posts from "./Posts.js";
import EditProfile from "./EditProfile.js";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import FileUpload from "./FileUpload.js";

const BodyStatus = 'null';

class BodyPages extends Component {



    renderWithBodyStatus(){
        
        return(
            <Router>
                <div className = "container mt-5">
                    <div className="btn-group">
                        <Link to="/" className="btn btn-dark" >
                            Services
                        </Link>
                        <Link to="/EditProfile" className="btn btn-dark" >
                            EditProfile
                        </Link>
                        <Link to="/Posts" className="btn btn-dark" >
                            Posts
                        </Link>
                        <Link to="/FileUpload" className="btn btn-dark" >
                            FileUpload
                        </Link>
                    </div>
                  
                    <hr/>
                    <Switch>
                        <Route path="/" exact >
                            <Services/>
                        </Route>

                        <Route path="/EditProfile">
                            <EditProfile/>
                        </Route>

                        <Route path="/Posts">
                            <Posts/>
                        </Route>

                        <Route path="/FileUpload">
                            <FileUpload/>
                        </Route>
                    </Switch>

                </div>
            </Router>

        );
    }
    
    /* renderWithBodyStatus(){
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
        
    } */
    
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