import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../Store/Actions/PostActions'

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
        //console.log(this.state);
        this.props.createPost(this.state)
    }
    render() {
        console.log(this.props);
        
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="">Crea un nuevo Post</h5>
                    <div className="input-field">
                        <label htmlFor="content">Ciudad</label>
                        <input type="text" id="ciudad" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="content">Descripcion del servici</label>
                        <textarea id="descripcion" className=" " onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Servicio</label>
                        <textarea id="servicio" className=" " onChange={this.handleChange}></textarea>
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
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost);
