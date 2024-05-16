import React from 'react'
import { Link } from 'react-router-dom'
export default function Master(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary text-bold" to="/">
                        React Ecommerce
                    </Link>
                    <button
                        data-mdb-collapse-init=""
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-primary text-bold"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary text-bold" href="/cart.html">
                                    Carts<span className="badge badge-danger ms-2">8</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary text-bold" to="/about ">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {props.children}
        </>
    )
}
