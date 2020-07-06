import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { createHist } from "../../Store/Actions/HistActions";
import HashTable from "../../Estructuras/HashTable"; 
import emailjs from 'emailjs-com'

class ContractDetails extends Component {
  state = {
    calificacionProv: "3",
    ciudadProv: "",
    correoProv: "",
    descripcionServicio: "",
    tipoServicio: "",
    telefonoProv: "",
    nombreProv: "",
    nombreClient: "",
    correoClient: "",
    detalles:"",
    estado:"ACTIVO",
    idPostProv : "", 
    creationDate: ""
    // falta agregar fecha 
  };
  handleChange = (e) => {
    const { posts } = this.props;
    const correo = this.props.match.params.id;
    
    const recorridodatos = posts.filter((post) => {
        if (post.correo == correo && post.servicio) return post   
    })
    const { auth, profile } = this.props;
    const fecha = new Date()
    this.setState({
      [e.target.id]: e.target.value,
      calificacionProv: recorridodatos[0].calificacion,
      ciudadProv: recorridodatos[0].ciudad,
      correoProv: recorridodatos[0].correo,
      descripcionServicio: recorridodatos[0].descripcion,
      tipoServicio: recorridodatos[0].servicio,
      telefonoProv: recorridodatos[0].telefono,
      nombreProv: recorridodatos[0].usuario,
      idPostProv : recorridodatos[0].id,
      nombreClient: profile.firstName + profile.lastName,
      correoClient: profile.email,
      creationDate: fecha
    });
  };

  handleContratarProveedor =async (e) => {
      e.preventDefault();
      const Data = {
        email_des: this.state.correoProv,
        descripcion_servicio: this.state.detalles,
        Client_email: this.state.correoClient,
        name_email: this.state.nombreClient,
      };
      let size =0; 
      for(let j = 0; j<1000;j++){
        if (this.props.usuarios[j] != undefined){
          size = size+1; 
        }else{
          break
        }
      }
      let hs = new HashTable(size);
      for(let i =0; i<size;i++){
         let username = this.props.usuarios[i].firstName + this.props.usuarios[i].lastName; 
         let correo = this.props.usuarios[i].email;
         hs.Insert(username,correo);
      } 
     const aux = hs.FindUser(this.props.auth.email)
     this.setState({
       nombreClient: aux.username,
       correoClient: aux.correo
     })
      this.sendFeedback(Data);
  };
  sendFeedback  (variables)  {
	window.emailjs
       .send("gmail", "template_6oH3UV3l", variables)
       .then((res) => {
         console.log("Email successfully sent!");
         this.props.createHist(this.state);
       })
       // Handle errors here however you like, or use a React error boundary
       .catch((err) =>
         console.error(
           "Oh well, you failed. Here some thoughts on the error that occured:",
           err
        )
       );}

  render() {
    const { posts } = this.props;
    const correo = this.props.match.params.id;
    const { auth, profile } = this.props;
    const renderButton = auth.uid ? (
      <button
        className="btn btn-success"
        onClick={this.handleContratarProveedor}
      >
        Contratar
      </button>
    ) : (
      <button className="btn btn-secondary">Contratar</button>
    );
    return (
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <div className="container bg-white ">
          <h2>Contratos de {correo} </h2>
          <hr></hr>
          {posts &&
            posts.map((post, id) => {
              if (post.correo == correo && post.servicio) {
                return (
                  <div>
                    <div className="row row-cols-1 row-cols-md-2" key={id}>
                      <p className="col mb-4 text-right font-weight-bold"> Usuario: </p> <p className="text-left" >{post.usuario}</p>
                      <p className="col mb-4 text-right font-weight-bold">Puntuacion Media : </p><p className="text-left">{post.calificacion}</p>
                      <p className="col mb-4 text-right font-weight-bold">Descripcion del servicio: </p><p className="text-left">{post.descripcion}</p>
                      <p className="col mb-4 text-right font-weight-bold">Ciudad:  </p><p className="text-left">{post.ciudad}</p>
                      <p className="col mb-4 text-right font-weight-bold">Telefono del proveesor: </p><p className="text-left">{post.telefono}</p>


                    </div>
                    <div className="input-field ">
                      <p htmlFor="content" className="font-weight-bold">Detalles del servicio a solicitar:  </p>
                      <textarea
                        id="detalles"
                        className="" style={{
                          height: 100,
                          width: 800
                        }}
                        onChange={this.handleChange}
                      ></textarea>
                    </div>
                  </div>
                  
                );
              }
            })}
          {renderButton}
        </div>
        
      </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      posts: state.firestore.ordered.post,
      profile: state.firebase.profile,
      usuarios: state.firestore.ordered.usuarios
    };
}
const mapDispatchToProps = (dispatch) => {
  return {
    createHist: (hist) => dispatch(createHist(hist)),
  };
};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'post' },
        { collection : 'usuarios'}
    ])
)(ContractDetails);