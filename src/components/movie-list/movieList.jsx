import React, { useEffect } from 'react'
import MovieListItem from '../movie-list-item/movieListItem';
import { connect } from 'react-redux';
import withMovieService from '../hoc/withMovieService';
import { moviesLoaded, moviesRequested, moviesError } from '../../actions/index.js';
import Error from '../error-indicator/error';
import Spinner from '../spinner/spinner';

import './movieList.scss';


const MovieList = ({ movies, loading, fetchMovies, error }) => {

        useEffect(() => {
                fetchMovies()
        }, []);

        if (loading) { return (<Spinner />) }
        if (error) { return (<Error err={error} />) }
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

const mapStateToProps = ({ movies, loading, error }) => {
        return {
                movies,
                loading,
                error
        }
}
const mapDispatchToProps = (dispatch, ownProps) => {
        const { movieService } = ownProps;
        return {
                fetchMovies: () => {
                        dispatch(moviesRequested())
                        movieService.getMovies()
                                .then((data) => dispatch(moviesLoaded(data)))
                                .catch((error) => dispatch(moviesError(error)));
                }
        }

}

export default withMovieService()(connect(mapStateToProps, mapDispatchToProps)(MovieList));



