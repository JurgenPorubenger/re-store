const initialState = {
    books:[],
    loading:true,
    error: null,
    cartItems: [],
    orderTotal: 150
};
const reducer = (state=initialState,action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error:null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload.map((item) => {
                    return {...item,count:0}
        }),
                loading: false,
                error:null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books:[],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const newItem = {
                id: book.id,
                name: book.title,
                count: book.count++,
                price: book.price*book.count,
            };
            // const newState = state.cartItems.filter((item)=>item.id!==bookId).push(newItem);
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.filter((item)=>item.id!==bookId),
                    newItem
                ]
            };
        default:
            return state;
    }
};
 export default reducer;
