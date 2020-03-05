import React from 'react';
import './App.css';
import {withBookStoreService} from '../hoc'

const App = ({bookStoreService}) => {
    console.log(bookStoreService.getBooks());
  return (
    <div className="App">
      hello
    </div>
  );
};

export default withBookStoreService()(App);
