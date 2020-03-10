
export default class BookstoreService {
     data = [
        {
            id: 1,
            title: 'Perdulator',
            author: 'Nicholas',
            price:32,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/91ahAhFS-LL.jpg"
        },
        {
            id: 2,
            title: 'Rigan',
            author: 'Jack',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51qQTSKL2nL._SX258_BO1,204,203,200_.jpg'
        }
    ];
    getBooks() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(this.data),1000)
            // setTimeout(()=>reject(new Error('MY ERROR!')),1000)
        })
    }
}
