import React from 'react';

import './movieListItem.scss';

const MovieListItem = ({ movie }) => {

        const { title, year } = movie

        return (
                <div class="card mb-3">
                        <h3 class="card-header">{title}</h3>
                        <div class="card-body">
                                <h5 class="card-title">{year}</h5>
                                <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                        </div>
                        <img></img>
                        <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
        )
}

export default MovieListItem;
