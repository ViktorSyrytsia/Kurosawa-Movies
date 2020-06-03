import React from 'react';

import './shopping-cart.scss'

const ShoppingCart = ({ id, title, price }) => {
        return (
                <div className="shopping-cart">
                        <h2>Your order</h2>
                        <table className="table table-hover">
                                <thead>
                                        <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Price</th>
                                                <th scope="col"></th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr className="table-light cart-table-row">
                                                <th scope="row">1</th>
                                                <td>Title of the film</td>
                                                <td>50</td>
                                                <td className="buttons-cart">
                                                        <button type="button" className="btn btn-outline-success btn-sm">Success</button>
                                                        <button type="button" className="btn btn-outline-warning btn-sm">Warning</button>
                                                        <button type="button" className="btn btn-outline-danger btn-sm">Danger</button>
                                                </td>
                                        </tr>
                                        <tr className="table-light cart-table-row">
                                                <th scope="row">2</th>
                                                <td>Title of the film</td>
                                                <td>200</td>
                                                <td className="buttons-cart">
                                                        <button type="button" className="btn btn-outline-success btn-sm">Success</button>
                                                        <button type="button" className="btn btn-outline-warning btn-sm">Warning</button>
                                                        <button type="button" className="btn btn-outline-danger btn-sm">Danger</button>
                                                </td>
                                        </tr>
                                        <tr className="table-light cart-table-row">
                                                <th scope="row">3</th>
                                                <td>Title of the film</td>
                                                <td>100</td>
                                                <td className="buttons-cart">
                                                        <button type="button" className="btn btn-outline-success btn-sm">Success</button>
                                                        <button type="button" className="btn btn-outline-warning btn-sm">Warning</button>
                                                        <button type="button" className="btn btn-outline-danger btn-sm">Danger</button>
                                                </td>
                                        </tr>
                                </tbody>
                        </table>
                        <button type="button" className="btn btn-outline-success check-btn">Success</button>
                </div>
        )
}

export default ShoppingCart
