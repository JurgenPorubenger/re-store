const updateBookList = (state, action) => {
    if(state===undefined) {
        return {
            books:[],
            loading:true,
            error: null,
        }
    };

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                loading: true,
                error:null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload.map((item) => {
                    return {...item,count:0}
                }),
                loading: false,
                error:null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                books:[],
                loading: false,
                error: action.payload
            };
        default:
            return state.bookList;
    }
};

export default updateBookList