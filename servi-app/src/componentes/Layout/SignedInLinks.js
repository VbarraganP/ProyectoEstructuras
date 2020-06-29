import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <React.Fragment>
            <li className="nav-item"><NavLink className="nav-link" to='/CreatePost'>Crear Post</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/CreateService'>Crear servicio</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/'>Historial</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/'>Log Out</NavLink></li>
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
export default SignedInLinks;