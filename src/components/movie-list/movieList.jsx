import React, { useEffect } from 'react'
import MovieListItem from '../movie-list-item/movieListItem';
import { connect } from 'react-redux';
import withMovieService from '../hoc/withMovieService';
import moviesLoaded from '../../actions/index.js';

import './movieList.scss';


const MovieList = ({ movies, movieService, moviesLoaded }) => {

        useEffect(() => {
                const data = movieService.getMovies();
                moviesLoaded(data);
        }, [])

        return (
                <div className="movies-grid">
                        {movies.map((movie) => {
                                return (
                                        <MovieListItem key={movie.id} movie={movie} />
                                )
                        })}
                </div>
        )
}

const mapStateToProps = ({ movies }) => {
        return {
                movies
        }
}
const mapDispatchToProps = {
        moviesLoaded
}

export default withMovieService()(connect(mapStateToProps, mapDispatchToProps)(MovieList));



