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
                    <h5 className="">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">first Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">lastName</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn btn-sucess">Login</button>
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
