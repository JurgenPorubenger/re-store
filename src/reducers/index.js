const initialState = {
    books:[],
    loading:true,
    error: null,
    cartItems: [],
    orderTotal: 150
};

const  newCartItemsState = (cartItems, item ,idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0,idx),
        item,
        ...cartItems.slice(idx+1)
    ];
};

const updateCartItem = (book, item = {}, quantity) => {
 const {
    id=book.id,
    count=0,
    title=book.title,
    total=0
 } = item;
 return {
     id,
     title,
     count: count+quantity,
     total: total+quantity*book.price
 }
};
const updateOrder = (state, bookId, quantity) => {
    const {books,cartItems} = state;

    const book = books.find((book) => book.id === bookId);
    const findBookIndex = cartItems.findIndex((book) => book.id === bookId);
    const item = cartItems[findBookIndex];

    const newItem = updateCartItem(book, item, quantity);
    return {
        ...state,
        cartItems: newCartItemsState(cartItems, newItem, findBookIndex)
    };
}
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
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1)
        default:
            return state;
    }
};
 export default reducer;
