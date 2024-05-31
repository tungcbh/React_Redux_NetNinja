import React from "react";
import { Link, NavLink } from 'react-router-dom';


const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Logo</a>
                <ul className="right">
                    <li><Link to="/"> Home </Link></li>
                    <li><NavLink to="/about"> About </NavLink></li>
                    <li><Link to="/contact"> Contact </Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;