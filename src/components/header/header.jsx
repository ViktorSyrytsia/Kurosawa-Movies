import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ items }) => {
        let count = 0;
        let sum = 0;
        for (const item of items) {
                sum += item.total;
                count += item.count;
        }
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
                                <div>Items: {count} (total price: ${sum})</div>
                        </nav>

                </div>
        )
}

const mapStateToProps = ({ cartItems }) => {
        return {
                items: cartItems,
        };
};

export default connect(mapStateToProps)(Header)
