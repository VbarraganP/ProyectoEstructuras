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

                <form onSubmit={this.handleSubmit} className="white">
                    <div className="container w-50 h-50">
                        <h5 className="display-4">Crea un nuevo Post</h5>

                        <div className="form-group">
                            <label htmlFor="content"  className="h4 float-left">Ciudad</label>
                            <input type="text" id="ciudad" className="form-control" onChange={this.handleChange} />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="content" className="h4 float-left">Descripción del servicio </label>
                            <textarea id="descripcion" className="form-control" onChange={this.handleChange}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="content"  className="h4 float-left">Servicio</label>
                            <select id="servicio" className="form-control" onChange={this.handleChange}>
                                <option value="null">Tipo de servicio</option>
                                {services && services.map((service,id) => {
                                    return (
                                        <option value={service.title} key={id}>{service.title}</option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="content" className="h4 float-left">Teléfono</label>
                            <textarea id="telefono" className="form-control" onChange={this.handleChange}></textarea>
                        </div>
                        
                        <div className="input-field">
                            <button className="btn btn-success ">Crear</button>
                        </div>
                    </div>
                </form>
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

