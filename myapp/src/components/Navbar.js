import React from "react";

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/"  className="brand-logo">Logo</a>
                <ul className="right">
                    <li><a href="/home"> Home </a></li>
                    <li><a href="/about"> About </a></li>
                    <li><a href="/contact"> Contact </a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;