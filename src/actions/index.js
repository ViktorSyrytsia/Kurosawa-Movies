const moviesLoaded = (newMovies) => {
        return {
                type: 'MOVIES_LOADED',
                payload: newMovies
        }
}

const moviesRequested = () => {
        return {
                type: 'MOVIES_REQUESTED'
        }
}

const moviesError = (error) => {
        return {
                type: 'MOVIES_ERROR',
                payload: error
        }
}


export { moviesLoaded, moviesRequested, moviesError };
