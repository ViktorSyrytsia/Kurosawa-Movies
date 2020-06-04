import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ numItems, total }) => {
        return (
                <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <Link className="navbar-brand" to="/">Akiro Kurosawa Movies</Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarColor03">
                                        <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                                </li>
                                                <li className="nav-item">
                                                        <Link className="nav-link" to="cart">Cart</Link>
                                                </li>
                                        </ul>
                                </div>
                                <div>Items: {numItems} (total price: ${total})</div>
                        </nav>

                </div>
        )
}

export default Header
