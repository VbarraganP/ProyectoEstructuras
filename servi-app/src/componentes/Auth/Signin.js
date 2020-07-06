import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../Store/Actions/AuthActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="display-4">Inicia Sesión</h5>
          <div className="from-group">
            <label htmlFor="email" className="h4 float-left">Email</label>
            <input type="email" id='email' className="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className= "h4 float-left">Password</label>
            <input type="password" id='password'className="form-control"onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn btn-success">Login</button>
            <div className="center red-text">
              { authError ? <p>Inicio de sesión fallido, intente de nuevo</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)