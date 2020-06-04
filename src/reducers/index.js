const initialState = {
        movies: [],
        loading: true,
        error: null,
        cartItems: [],
        orderTotal: 0
};

const updateCartItems = (cartItems, item, index) => {

        if (item.count === 0) {
                return [
                        ...cartItems.slice(0, index),
                        ...cartItems.slice(index + 1)
                ]
        }

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

const updateCartItem = (movie, item, quantity) => {


        if (item) {
                return {
                        ...item,
                        count: item.count + quantity,
                        total: item.total + movie.price * quantity
                }
        } else {
                return {
                        id: movie.id,
                        title: movie.title,
                        count: 1,
                        total: movie.price
                };
        }
}

const updateOrder = (state, movieId, quantity) => {
        const { movies, cartItems } = state;

        const movie = movies.find(({ id }) => id === movieId);
        const itemIndex = cartItems.findIndex(({ id }) => id === movieId);
        const item = cartItems[itemIndex];
        const newCartItem = updateCartItem(movie, item, quantity);

        return {
                ...state,
                cartItems: updateCartItems(cartItems, newCartItem, itemIndex)
        };
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
                        return updateOrder(state, action.payload, 1)

                case 'MOVIE_REMOVE_FROM_CART':
                        return updateOrder(state, action.payload, -1)

                case 'ALL_MOVIES_REMOVE_FROM_CART':
                        const item = state.cartItems.find(({ id }) => id === action.payload);
                        return updateOrder(state, action.payload, -item.count)




                default:
                        return state
        }
}

export default reducer