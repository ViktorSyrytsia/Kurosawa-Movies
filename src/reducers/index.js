const initialState = {
        movies: [],
        loading: true,
        error: null,
        cartItems: [],
        orderTotal: 400
};

const updateCartItems = (cartItems, item, index) => {
        if (index < 0) {
                return [
                        ...cartItems,
                        item
                ];
        }
        return [
                ...cartItems.slice(0, index),
                item,
                ...cartItems.slice(index + 1)
        ];
}

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

                case 'MOVIE_ADD_TO_CART':
                        const movieId = action.payload;
                        const movie = state.movies.find((movie) => movie.id === movieId);
                        const itemIndex = state.cartItems.findIndex(({ id }) => id === movieId);
                        const item = state.cartItems[itemIndex];

                        let newCartItem;

                        if (item) {
                                newCartItem = {
                                        ...item,
                                        count: item.count + 1,
                                        total: item.total + movie.price
                                }
                        } else {
                                newCartItem = {
                                        id: movie.id,
                                        title: movie.title,
                                        count: 1,
                                        total: movie.price
                                };
                        }

                        return {
                                ...state,
                                cartItems: updateCartItems(state.cartItems, newCartItem, itemIndex)
                        };

                default:
                        return state
        }
}

export default reducer