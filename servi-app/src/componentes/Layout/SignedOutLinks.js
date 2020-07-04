import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <React.Fragment >
            <ul className="navbar-nav ">
                <li className="nav-item"><NavLink className="nav-link" to='/SignUp'>Signup</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to='/SignIn'>Login</NavLink></li>
            </ul>
            
        </React.Fragment>
    )
}
export default SignedOutLinks;