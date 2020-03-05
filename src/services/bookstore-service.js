import React from 'react';

export default class BookstoreService {
    getBooks() {
        return[
            {
                id: 1,
                title: 'Perdulator',
                author: 'Nocholas'
            },
            {
                id: 2,
                title: 'Rigan',
                author: 'Jack'
            }
        ];
    }
}
