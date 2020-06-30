import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../componentes/Layout/Navbar'
import Services from '../componentes/ListServices/Services'
import Post from '../componentes/ListPost/Post'
import Signin from '../componentes/Auth/Signin'
import SignUp from '../componentes/Auth/SignUp'
import CreatePost from '../componentes/ListPost/CreatePost'
import CreateService from '../componentes/ListServices/CreateService'
import Historial from '../componentes/Historial/Historial';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/service" component={Services} />
            <Route exact path="/service/:id" component={Post} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/CreatePost" component={CreatePost} />
            <Route exact path="/CreateService" component={CreateService} />
            <Route exact path="/historial" component={Historial}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
