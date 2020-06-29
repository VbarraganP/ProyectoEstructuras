import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../Store/Actions/AuthActions'

const SignedInLinks = (props) => {
    return (
        <React.Fragment>
            <li className="nav-item"><NavLink className="nav-link" to='/CreatePost'>Crear Post</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/CreateService'>Crear servicio</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/'>Historial</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li className="nav-item"><NavLink className="nav-link" to='/'> Usuario </NavLink></li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/'>
                    <img
                        className="rounded-circle dropdown-toggle"
                        data-toggle="dropdown"
                        width="40" 
                        height="40"
                        type="button"
                    />
                </NavLink>
            </li>
        </React.Fragment>
    )
}


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)