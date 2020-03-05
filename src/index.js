import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";
import {BookStoreServiceProvider} from './components/bookstore-service-context/'

import store from './store'

const bookStoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookStoreServiceProvider value={bookStoreService}>
                <Router>
                    <App />
                </Router>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
