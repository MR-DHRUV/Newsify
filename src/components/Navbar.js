import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'


const Navbar = (props) => {
    return (

        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark pattern-diagonal-stripes-md">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link my-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link my-link" aria-current="page" to="/business">business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link my-link" aria-current="page" to="/entertainment">entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link my-link" aria-current="page" to="/health">health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link my-link" aria-current="page" to="/science">science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link my-link" aria-current="page" to="/sports">sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link my-link" aria-current="page" to="/technology">technology</Link>
                        </li>

                    </ul>

                </div>
                <a className="navbar-brand my-brand-logo" id='heading' href="/">Newzify.me</a>
            </div>
        </nav>
    )
}


export default Navbar
