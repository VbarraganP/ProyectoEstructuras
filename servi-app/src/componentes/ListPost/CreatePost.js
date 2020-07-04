import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { createPost } from '../../Store/Actions/PostActions'
import Historial from '../Historial/Historial'

class CreatePost extends Component {
    
    state = {
        calificacion: '3',
        ciudad: '',
        correo: '',
        descripcion: '',
        servicio: '',
        telefono: '',
        usuario:''
    }

    handleChange = (e) => {
        const {auth, profile}=this.props;     

        this.setState({
            [e.target.id]: e.target.value,
            correo: profile.email,
            usuario:profile.firstName 
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.createPost(this.state)
    }
    render() {
        
        const { services } = this.props;
        
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="">Crea un nuevo Post</h5>
                    <div className="input-field">
                        <label htmlFor="content">Ciudad</label>
                        <input type="text" id="ciudad" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="content">Descripcion del servicio </label>
                        <textarea id="descripcion" className=" " onChange={this.handleChange}></textarea>
                    </div>
                    <div className="">
                        <label htmlFor="content">Servicio</label>
                        <select id="servicio" onChange={this.handleChange}>
                            <option value="null">Tipo de servicio</option>
                            {services && services.map(service => {
                                return (
                                    <option value={service.title}>{service.title}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Telefono</label>
                        <textarea id="telefono" className=" " onChange={this.handleChange}></textarea>
                    </div>
                    
                    <div className="input-field">
                        <button className="btn ">Crear</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.firestore.ordered);
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile,
      services: state.firestore.ordered.services,
      historial: state.firestore.ordered.Contratos,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'services' }
    ])
)(CreatePost);

