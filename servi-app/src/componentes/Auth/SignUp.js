import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../Store/Actions/AuthActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    
    render() {
        const {authError} = this.props;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="display-4">Registrate</h5>
                    <div className="form-group">
                        <label htmlFor="firstName" className="h4 float-left">Nombre</label>
                        <input type="text" className="form-control" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="h4 float-left">Apellido</label>
                        <input type="text" className="form-control" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="h4 float-left">Email</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="h4 float-left">Contraseña</label>
                        <input type="password" className="form-control"id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn btn-success">Login</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p>:null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
const mapStateToProps =(state) => {
    return {
        authError: state.auth.authError
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
