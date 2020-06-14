import React, { Component } from "react";
import firebase from "firebase";

import Logo from "../../resources/LogoServiApp.jpg";

import {Link} from "react-router-dom";


import FileUpload from "./FileUpload.js";

import BodyPages from "./BodyPages"
//paginas derivadas
import Services from "./Services.js";
import Posts from "./Posts.js";
import EditProfile from "./EditProfile.js";



class Navigation extends Component {
  //gestor de estados
  constructor() {
    super();
    this.state = {
      user: null,
    };
    //bindeo de las funciones con this.
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => console.log(`${result.user.email} ha iniciado sesion`))
      .catch((error) => console.log(`Error ${error.code}:{error.message}`));
  }

  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then((result) => console.log(`${result.user.email} ha salido`))
      .catch((error) => console.log(`Error ${error.code}:{error.message}`));
  }

  renderLoginButton() {
    //si el usuario esta logueado
    if (this.state.user) {
      return (
        <div className="container ">
          <img
            src={this.state.user.photoURL}
            alt={this.state.user.displayName}
            className="rounded-circle"
            width="60"
            height="60"
            type="button"
          ></img>
         
          
          <p className="nav-item active">
            <a className="nav-link">
              {" "}
              Bienvenido {this.state.user.displayName}{""}
            </a>
          </p>
          <button type="button" className="btn btn-danger" onClick={this.handleLogout}>
            salir 
          </button>
        </div>
      );
    } else {
      //si no lo esta
      return (
        <button type="button" className="btn btn-success" onClick={this.handleAuth}>
          Iniciar Sesión
        </button>
      );
    }
  }


  
  render() {
    return (
      <div>
        <nav id="01" className="navbar navbar-expand-md bg-dark navbar-dark text-white justify-content-between">
        
         {/* para que esto funcione, el "link" debe de estar encerrado por un BrowserRouter por lo que se ejecuta <Navigation/> dentro de bodyStatus  */} 
         {/* Anteriormente lo que correspondia a este <link> era un <a> */}
          <Link to="/Services">
            <img
              src={Logo}
              alt="Logo"
              className="rounded-circle"
              width="60"
              height="60"
            ></img>
            
          </Link>
          <div className="btn-group">
            <Link to="/Services" className="btn btn-dark" >
                Services
            </Link>
            <Link to="/EditProfile" className="btn btn-dark" >
                EditProfile
            </Link>
            
            <Link to="/FileUpload" className="btn btn-dark" >
                FileUpload
            </Link>
          </div>
          
          {this.renderLoginButton()}
          
        </nav>
        

      </div>
    );
  }
}

export default Navigation;