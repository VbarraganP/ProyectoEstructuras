import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark text-white ">
            <div className="container">
                <Link to='/service' className="navbar-brand">Servi App</Link>
                <ul className="navbar-nav ">
                    <SignedOutLinks />
                    <SignedInLinks />
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;