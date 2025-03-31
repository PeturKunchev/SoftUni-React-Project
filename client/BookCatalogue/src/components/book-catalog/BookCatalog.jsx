import { useBooks } from "../../api/booksApi";
import BookCatalogueItem from "./book-catalog-item/BookCatalogItem";
import "./BookCatalog.css"
export default function BookCatalog() {

  const {books} = useBooks();
  
  return (
    <>
  <h2 className="headerText">Catalogue</h2>
    <div className="catalogue-container">
      <div className="book-list">
          {books.length > 0 ? books.map(book => <BookCatalogueItem key = {book._id} {...book}/>):<h3>No books yet...</h3>}
      </div>
    </div>
    </>
  );
}