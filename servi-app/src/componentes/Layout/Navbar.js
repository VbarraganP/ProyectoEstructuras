import React from 'react'
import {Link, matchPath} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

const Navbar = (props) => {
    const {auth}=props;
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/> // si hay un usuario acrtivo muestra las acciones de usuario si no login y sign up 
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark text-white ">
            <div className="container">
                <Link to='/service' className="navbar-brand">Servi App</Link>
                <ul className="navbar-nav ">
                    {links}
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar)