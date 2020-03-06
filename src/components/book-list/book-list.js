import React, {Component} from "react";
import BookListItem from "../book-list-item";
import './index.css'
import { connect } from 'react-redux'
import {withBookStoreService} from '../hoc'
import {booksLoaded} from '../../actions'
class BookList extends Component {
    componentDidMount() {
        const {bookStoreService,booksLoaded} = this.props;
        const data = bookStoreService.getBooks();
        booksLoaded(data)
    }

    render() {
        const {books} = this.props;
        return (
            <ul>
                {books.map((book)=>{
                    return (
                        <li key={book.id}><BookListItem book={book} /></li>
                    )
                })}
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        books:state.books
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        booksLoaded:(newBooks)=>{
            dispatch(
                booksLoaded(newBooks)
            )
        }
    }
}
export default withBookStoreService()(connect(mapStateToProps,mapDispatchToProps)(BookList));
