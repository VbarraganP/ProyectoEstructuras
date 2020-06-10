import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './componentes/App/App.js';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyBG5sSGS89B7oHYatlq249OGRzitBpNLok",
  authDomain: "react-serviapp.firebaseapp.com",
  databaseURL: "https://react-serviapp.firebaseio.com",
  projectId: "react-serviapp",
  storageBucket: "react-serviapp.appspot.com",
  messagingSenderId: "50181871532",
  appId: "1:50181871532:web:1161640416bb13695a8c09",
  measurementId: "G-V9WV371L0C"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
