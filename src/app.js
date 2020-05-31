console.log('listo'); 
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDsVlkk8Jtn0Rrk2R3BFzIP8gXn5XR649E",
    authDomain: "proyectoserviapp.firebaseapp.com",
    projectId: "proyectoserviapp",
  });
  
var db = firebase.firestore();
//--
function registrarusuario(){
    console.log('registrando...');
    var username= document.getElementById('username').value; 
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value; 
    var ciudad = document.getElementById('ciudad').value; 
    var contrasena = document.getElementById('password').value; 
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