import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../Store/Actions/PostActions'

class CreatePost extends Component {
    state = {
        calificacion: '0',
        ciudad: '',
        correo: '',
        descripcion: '',
        servicio: '',
        telefono: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createPost(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="">Crea un nuevo Post</h5>
                    <div className="input-field">
                        <label htmlFor="content">Ciudad</label>
                        <input type="text" id="ciudad" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Correo</label>
                        <textarea id="correo" className=" " onChange={this.handleChange}></textarea>
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
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null,mapDispatchToProps)(CreatePost);
