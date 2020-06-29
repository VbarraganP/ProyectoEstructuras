import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBG5sSGS89B7oHYatlq249OGRzitBpNLok",
  authDomain: "react-serviapp.firebaseapp.com",
  databaseURL: "https://react-serviapp.firebaseio.com",
  projectId: "react-serviapp",
  storageBucket: "react-serviapp.appspot.com",
  messagingSenderId: "50181871532",
  appId: "1:50181871532:web:1161640416bb13695a8c09",
  measurementId: "G-V9WV371L0C",
};

firebase.initializeApp(firebaseConfig);



 export default firebase;