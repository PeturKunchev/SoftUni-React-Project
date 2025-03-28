import { useParams } from 'react-router';
import { useBook } from '../../api/booksApi';
import './Details.css'
export default function Details() {
    const {bookId} = useParams();
    const {book} = useBook(bookId);
    console.log(book);
    
  return (
    <>
   <div className="details-page-container">
  <div className="details-page-info">
    <div className="details-img">
      <img src={book.img} alt={book.title} />
    </div>

    <div className="details-info">
      <h1 className="details-title">{book.title}</h1>
      <p className="details-author">Author: {book.author}</p>
      <p className="details-year">Year: {book.year}</p>
      <p className="details-description">Description: {book.description}</p>
      <p className="details-price">Price: ${book.price}</p>
      <p className="details-language">Language: {book.language}</p>
    </div>
  </div>

  <div className="action-buttons">
    <button className="edit-btn">Edit</button>
    <button className="delete-btn">Delete</button>
    <button className="favourite-btn">Favourite</button>
  </div>
</div>
    </>
  );
}