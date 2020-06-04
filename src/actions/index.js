const moviesLoaded = (newMovies) => {
        return {
                type: 'FETCH_MOVIES_SUCCESS',
                payload: newMovies
        }
}

const moviesRequested = () => {
        return {
                type: 'FETCH_MOVIES_REQUEST'
        }
}

const moviesError = (error) => {
        return {
                type: 'FETCH_MOVIES_FAILURE',
                payload: error
        }
}

const fetchMovies = (movieService, dispatch) => () => {
        dispatch(moviesRequested())
        movieService.getMovies()
                .then((data) => dispatch(moviesLoaded(data)))
                .catch((error) => dispatch(moviesError(error)));
}


export { fetchMovies };
