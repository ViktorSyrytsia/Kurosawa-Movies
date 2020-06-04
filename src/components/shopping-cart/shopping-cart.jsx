import React from 'react';
import { connect } from 'react-redux';
import { movieAddToCart, movieRemoveFromCart, AllMoviesRemoveFromCart } from '../../actions';

import './shopping-cart.scss'


const ShoppingCart = ({ items, onIncrease, onDecrease, onDelete }) => {

        let sum = 0;
        for (const item of items) {
                sum += item.total
        }

        return (
                <div className="shopping-cart">
                        <h2>Your order</h2>
                        <table className="table table-hover">
                                <thead>
                                        <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Count</th>
                                                <th scope="col">Price</th>
                                                <th scope="col"></th>
                                        </tr>
                                </thead>
                                <tbody>
                                        {
                                                items.map((item, index) => {
                                                        const { id, title, count, total } = item;
                                                        return (
                                                                <tr key={id} className="table-light cart-table-row">
                                                                        <th scope="row">{index + 1}</th>
                                                                        <td>{title}</td>
                                                                        <td>{count}</td>
                                                                        <td>{total}</td>
                                                                        <td className="buttons-cart">
                                                                                <button
                                                                                        onClick={() => onIncrease(id)}
                                                                                        type="button"
                                                                                        className="btn btn-outline-success btn-sm plus">Plus</button>
                                                                                <button
                                                                                        onClick={() => onDecrease(id)}
                                                                                        type="button"
                                                                                        className="btn btn-outline-warning btn-sm minus">Minus</button>
                                                                                <button
                                                                                        onClick={() => onDelete(id)}
                                                                                        type="button"
                                                                                        className="btn btn-outline-danger btn-sm">Delete</button>
                                                                        </td>
                                                                </tr>
                                                        )
                                                })
                                        }
                                </tbody>
                        </table>
                        <div className="check">
                                <div className="check-total">Total: ${sum}</div>
                                <button type="button" className="btn btn-outline-success check-btn">Check</button>
                        </div>

                </div>
        )
}

const mapStateToProps = ({ cartItems }) => {
        return {
                items: cartItems,
        };
};

const mapDispatchToProps = {
        onIncrease: movieAddToCart,
        onDecrease: movieRemoveFromCart,
        onDelete: AllMoviesRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
