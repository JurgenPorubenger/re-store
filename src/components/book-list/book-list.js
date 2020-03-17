import React, {Component} from "react";
import BookListItem from "../book-list-item";
import './index.css'
import { connect } from 'react-redux'
// import {bindActionCreators} from 'redux'
import {compose} from '../../utils'
import {withBookStoreService} from '../hoc'
import {fetchBooks,bookAddedToCart} from '../../actions'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


const BookList = ({books,onAddedToCart}) => {
    return (
        <ul className="book-list">
            {books.map((book)=>{
                return (
                    <li key={book.id}>
                        <BookListItem book={book}
                        onAddedToCart={() => onAddedToCart(book.id)}/>
                    </li>
                )
            })}
        </ul>
    )
};

class BookListContainer extends Component {
    componentDidMount() {
        const { fetchBooks } = this.props;
        fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        console.log(books);
        return <BookList books = {books} onAddedToCart={onAddedToCart} />
    }
}


const mapStateToProps = ({bookList}) => {
    return {
        books:bookList.books,
        loading:bookList.loading,
        error: bookList.error
    }
};
const mapDispatchToProps = (dispatch, ownProps)=>{
    const {bookStoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(bookStoreService,dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))

        // booksLoaded:(newBooks)=>{
        //     dispatch(
        //         booksLoaded(newBooks)
        //     )
        // },
        // booksRequested: () => {
        //   dispatch(
        //       booksRequested()
        //   )
        // },
        // booksError: (error) => {
        //     dispatch(
        //         booksError(error)
        //     )
        // }
    }
};
export default compose(withBookStoreService(),
    connect(mapStateToProps,mapDispatchToProps))(BookListContainer);

// export default withBookStoreService()(connect(mapStateToProps,mapDispatchToProps)(BookList));
