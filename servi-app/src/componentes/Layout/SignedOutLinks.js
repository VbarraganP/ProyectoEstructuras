import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <React.Fragment >
            <li className="nav-item"><NavLink className="nav-link" to='/SignUp'>Signup</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='/SignIn'>Login</NavLink></li>
        </React.Fragment>
    )
}
export default SignedOutLinks;