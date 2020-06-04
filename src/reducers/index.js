const initialState = {
        movies: [],
        loading: true,
        error: null,
        cartItems: [
                { id: 1, title: 'movie one', count: 1, total: 100 },
                { id: 2, title: 'movie two', count: 3, total: 300 }
        ],
        orderTotal: 400
};

const reducer = (state = initialState, action) => {

        switch (action.type) {
                case 'FETCH_MOVIES_REQUEST':
                        return {
                                ...state,
                                movies: [],
                                loading: true,
                                error: null
                        }
                case 'FETCH_MOVIES_SUCCESS':
                        return {
                                ...state,
                                movies: action.payload,
                                loading: false,
                                error: null
                        }
                case 'FETCH_MOVIES_FAILURE':
                        return {
                                ...state,
                                movies: [],
                                loading: false,
                                error: action.payload
                        }

                default:
                        return state
        }
}

export default reducer