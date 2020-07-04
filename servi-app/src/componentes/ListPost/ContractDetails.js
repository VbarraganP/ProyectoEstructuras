import React, { Component } from "react";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { createHist } from "../../Store/Actions/HistActions";

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
    detalles:""
  };
  handleChange = (e) => {
    const { posts } = this.props;
    const correo = this.props.match.params.id;
    
    const recorridodatos = posts.filter((post) => {
        if (post.correo == correo && post.servicio) return post   
    })
    
    const { auth, profile } = this.props;
    this.setState({
      [e.target.id]: e.target.value,
      calificacionProv: recorridodatos[0].calificacion,
      ciudadProv: recorridodatos[0].ciudad,
      correoProv: recorridodatos[0].correo,
      descripcionServicio: recorridodatos[0].descripcion,
      tipoServicio: recorridodatos[0].servicio,
      telefonoProv: recorridodatos[0].telefono,
      nombreProv: recorridodatos[0].usuario,
      nombreClient: profile.firstName,
      correoClient: profile.email,
    });
    
    
  };

  handleContratarProveedor = (e) => {
    e.preventDefault();
    
    this.props.createHist(this.state);
  };

  render() {
    const { posts } = this.props;
    const correo = this.props.match.params.id;
    //console.log(props)
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
      <div className="">
        <h2>Contratos de {correo} </h2>
        <hr></hr>
        {posts &&
          posts.map((post) => {
            if (post.correo == correo && post.servicio) {
              return (
                <div>
                  <p>{post.calificacion}</p>
                  <p>{post.descripcion}</p>
                  <p>{post.ciudad}</p>
                  <p>{post.telefono}</p>
                  <div className="input-field">
                    <label htmlFor="content">Detalles del servicio </label>
                    <textarea
                      id="detalles"
                      className=" "
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        {renderButton}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      posts: state.firestore.ordered.post,
      profile: state.firebase.profile,
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
        { collection: 'post' }
    ])
)(ContractDetails);