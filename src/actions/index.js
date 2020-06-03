const movieLoaded = (newMovies) => {
        return {
                type: 'MOVIES_LOADED',
                payload: newMovies
        }
}
export default movieLoaded
