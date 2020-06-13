import React, { Component} from "react";
import firebase from "firebase";

class EditProfile extends Component{
    constructor(){
        super(); 
        this.state= {
            user:null, 
        }
        this.registrarusuario= this.registrarusuario.bind(this); 
        this.registrarProveedor= this.registrarProveedor.bind(this); 
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
          this.setState({ user });
        });
    }
    registrarusuario(){
        var db = firebase.firestore(); 
        var comprobacion = false;
        var username= document.getElementById('nameclient').value; 
        var telefono = document.getElementById('telefonoclient').value;
        var correo = this.state.user.email; 
        var ciudad = document.getElementById('ciudadclient').value; 
        var  contrasena = document.getElementById('passwordclient').value; 
        db.collection("usuarios").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               if(doc.data().correo == correo){
                   comprobacion=true; 
               }
            });
        });
        if (comprobacion){
            console.log('Ya registrado loco'); 
        }else { 
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
        })
        };
    }
    registrarProveedor(){
        var db = firebase.firestore(); 
        var comprobacion= false; 
        var username = document.getElementById('name').value;
        var telefono = document.getElementById('telefono').value;
        var correo = this.state.user.email; 
        var ciudad = document.getElementById('ciudad').value; 
        var contrasena = document.getElementById('password').value; 
        var servicio = document.getElementById('serviceType').value; 
        var description = document.getElementById('description').value; 
        if (servicio =="Cerrajeria"){
        db.collection("Proveedores").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               if(doc.data().correo == correo){
                   comprobacion=true; 
               }
            });
        });
        if (comprobacion){
            console.log('1'); 
        }else { 
        db.collection("Proveedores").add({
            username: username,
            telefono: telefono,
            correo: correo, 
            ciudad: ciudad, 
            contrasena: contrasena,
            servicio:servicio, 
            descripcion:description,
            calificacion : "0"
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        };
        }
        else if (servicio=="Plomeria"){
            db.collection("ProveedoresPlomeria").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                   if(doc.data().correo == correo){
                       comprobacion=true; 
                   }
                });
            });
            if (comprobacion){
                console.log('1'); 
            }else { 
            db.collection("ProveedoresPlomeria").add({
                username: username,
                telefono: telefono,
                correo: correo, 
                ciudad: ciudad, 
                contrasena: contrasena,
                servicio:servicio, 
                descripcion:description,
                calificacion : "0"
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
            };   
        }else {
            db.collection("ProveedoresElectricista").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                   if(doc.data().correo == correo){
                       comprobacion=true; 
                   }
                });
            });
            if (comprobacion){
                console.log('1'); 
            }else { 
            db.collection("ProveedoresElectricista").add({
                username: username,
                telefono: telefono,
                correo: correo, 
                ciudad: ciudad, 
                contrasena: contrasena,
                servicio:servicio, 
                descripcion:description,
                calificacion : "0"
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
            };
        }
    }
    render(){
        return (
            <div >
                <div className='container'>
                    <div className="Cliente">
                    <div id='App' className='row pt-5'>
                        <div className='col-md-8'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>Registrate Cliente</h4>
                                </div>
                  
                            <form id="product-form" className='card-body'>
                                <div className='form-group'>
                                    <input type="text" id="nameclient" placeholder="Tu Nombre completo" className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <input type="tel" id="telefonoclient" placeholder="Numero de contacto" className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <input type="password" id="passwordclient" placeholder="Tu contraseña" className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <input type="text" id="ciudadclient" placeholder="Tu ciudad" className='form-control'></input>
                                </div>
                                <input type="submit" value="Registrar" className='btn btn-primary btn-block' onClick={this.registrarusuario}></input>
                            </form>
                            </div>
                        </div>
                    </div> 
                    <div id="product-list" className='col-md-8'></div>
                    </div> 
                    <div className='Proveedor'>  
                    <div id='App' className='row pt-5'>
                        <div className='col-md-8'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>Registrate Proveedor</h4>
                                </div>
                  
                            <form id="product-form" className='card-body'>
                                <div className='form-group'>
                                    <input type="text" id="name" placeholder="Tu Nombre completo" className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <input type="tel" id="telefono" placeholder="Numero de contacto" className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <input type="password" id="password" placeholder="Tu contraseña" className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <input type="text" id="ciudad" placeholder="Tu ciudad" className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                <select id="serviceType" name="service"  className='form-control'>
                                    <option value="null">Tipo de servicio</option>
                                    <option value="Cerrajeria">Cerrajeria</option>
                                    <option value="Plomeria">Plomeria</option>
                                    <option value="Electricista">Electricista</option>
                                 </select>
                                </div>
                                <div className='form-group'>
                                    <textarea type="text" maxLength="300" id="description" className='form-control' defaultValue="Describe tu servicio"/>
                                </div>
                      
                                <input type="submit" value="Registrar" className='btn btn-primary btn-block' onClick={this.registrarProveedor}></input>
                            </form>
                            </div>
                        </div>
                    </div> 
                    <div id="product-list" className='col-md-8'></div>
                    </div> 
                </div>
            </div>
        )
    }
};
export default EditProfile;