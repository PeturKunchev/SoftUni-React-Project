import { useNavigate, useParams } from 'react-router';
import { useBook, useDeleteBook } from '../../api/booksApi';
import './Details.css'
export default function Details() {
    const navigate = useNavigate();
    const {bookId} = useParams();
    const {book} = useBook(bookId);
    const {deleteBook} = useDeleteBook();
    const authData = localStorage.getItem('authData');
    const userId = authData ? JSON.parse(authData)._id : null;
    let isOwner = userId === book._ownerId;
    const bookDeleteHandler = async () => {
      const hasConfirm = confirm(`Are you sure?`);
      if (!hasConfirm) {
        return;
      }
      await deleteBook(bookId);

      navigate('/books')
    
    }

    const handleEditClick = () => {
      navigate(`/books/${bookId}/edit`); 
    };

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
    {isOwner ? ( <><button onClick={handleEditClick} className="edit-btn">Edit</button>
                <button onClick={bookDeleteHandler}className="delete-btn">Delete</button></>) :

                <button  className="favourite-btn">Favourite</button>
     }
  </div>
</div>
    </>
  );
}