import { useLatestBooks } from '../../api/booksApi'
import BookCatalogueItem from '../book-catalog/book-catalog-item/BookCatalogItem';
import './Home.css'
export default function Home (){
     const {latestBooks} = useLatestBooks();
return (
     <>
     <div className="home-container">
      <h1>Latest Released Books</h1>
      <p>Explore the newest additions to our collection.</p>

      <div className="books-list">
        {latestBooks.map(book=>(
<BookCatalogueItem  key = {book._id} {...book}></BookCatalogueItem>
        ))}
      </div>
    </div></>
     )
}