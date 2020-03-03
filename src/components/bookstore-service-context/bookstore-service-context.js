import React, {Component} from "react";

const {
    Provider: BookStoreServiceProvider,
    Consumer:BookStoreServiceConsumer
} = React.createContext();

export {
    BookStoreServiceConsumer,
    BookStoreServiceProvider
};
