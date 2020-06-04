import React, { useEffect } from 'react'
import MovieListItem from '../movie-list-item/movieListItem';
import { connect } from 'react-redux';
import withMovieService from '../hoc/withMovieService';
import { fetchMovies } from '../../actions/index.js';
import Error from '../error-indicator/error';
import Spinner from '../spinner/spinner';

import './movieList.scss';


const MoveList = ({ movies }) => {
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


const MovieListContainer = ({ movies, loading, fetchMovies, error }) => {

        useEffect(() => {
                fetchMovies()
        }, []);

        if (loading) { return (<Spinner />) }
        if (error) { return (<Error err={error} />) }
        return (
                <MoveList movies={movies} />
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
                fetchMovies: fetchMovies(movieService, dispatch)
        }
}


export default withMovieService()(connect(mapStateToProps, mapDispatchToProps)(MovieListContainer));



