import React from 'react';

import './movieListItem.scss';

const MovieListItem = ({ movie, onAddToCart }) => {

        const { title, year, text, img, price } = movie

        return (
                <div className="card mb-3">
                        <h3 className="card-header">{title}</h3>
                        <div className="card-body">
                                <h5 className="card-title">{year}</h5>
                                <h6 className="card-subtitle text-muted">Price: ${price}</h6>
                        </div>
                        <img className="card-img" src={img} alt="poster" ></img>
                        <div className="card-body">
                                <p className="card-text">{text}</p>
                        </div>
                        <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={onAddToCart}

                        >Add</button>
                </div>
        )
}

export default MovieListItem;
