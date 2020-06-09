 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBkKgxmjPJ5TYli-ydKk5noUjsu2BajcNY",
    authDomain: "serviapp-78c77.firebaseapp.com",
    databaseURL: "https://serviapp-78c77.firebaseio.com",
    projectId: "serviapp-78c77",
    storageBucket: "serviapp-78c77.appspot.com",
    messagingSenderId: "914736952005",
    appId: "1:914736952005:web:646f58cf62dc9ab07936ac",
    measurementId: "G-HBCP4RT2BE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//----
var db = firebase.firestore();
//--
function registrarusuario(){
    console.log('registrando...');
    var username= document.getElementById('username').value; 
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value; 
    var ciudad = document.getElementById('ciudad').value; 
    var contrasena = document.getElementById('password').value; 
    firebase.auth().createUserWithEmailAndPassword(correo, contrasena).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    db.collection("usuarios").add({
        username: username,
        telefono: telefono,
        correo: correo, 
        ciudad: ciudad, 
        contrasena: contrasena
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
function registrarProveedor(){
    console.log('registrando...'); 
    var username = document.getElementById('name').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('email').value; 
    var ciudad = document.getElementById('ciudad').value; 
    var contrasena = document.getElementById('password').value; 
    var servicio = document.getElementById('serviceType').value; 
    var description = document.getElementById('description').value; 
    firebase.auth().createUserWithEmailAndPassword(correo, contrasena).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    db.collection("Proveedores").add({
        username: username,
        telefono: telefono,
        correo: correo, 
        ciudad: ciudad, 
        contrasena: contrasena,
        servicio:servicio, 
        descripcion:description
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
function ingresar(){
    var correo = document.getElementById('correo').value; 
    var contrasena = document.getElementById('password').value; 
    firebase.auth().signInWithEmailAndPassword(correo, contrasena).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}
function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log('funciona loco');
          var displayName = user.displayName;
          var email = user.correo;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log('no hay nadie pa'); 
        }
      });
}
observador();