import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";


import React, { Component } from 'react';
//import firebase from 'firebase';
import Navigation from '../ComPages/Navigation.js';
import BodyPages from '../ComPages/BodyPages.js';

import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        
        <BodyPages/>
      </div>
    )
  }
  
};

export default App;
