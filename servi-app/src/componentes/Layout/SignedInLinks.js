import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../Store/Actions/AuthActions'

const SignedInLinks = (props) => {
    return (
      <React.Fragment>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="nav-link" to="/CreatePost">
              Crear Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/CreateService">
              Crear servicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/historial">
              Historial
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={props.signOut} to="/service">
              Log Out
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="nav-link" to="/service">
              {console.log(props)}
              Bienvenido {props.profile.firstName} {props.profile.lastName}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/service">
              <img
                className="rounded-circle dropdown-toggle"
                data-toggle="dropdown"
                width="40"
                height="40"
                type="button"
              />
            </NavLink>
          </li>
        </ul>
      </React.Fragment>
    );
}


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)