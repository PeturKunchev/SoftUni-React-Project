import { useNavigate, useParams } from 'react-router';
import { useBook, useDeleteBook } from '../../api/booksApi';
import './Details.css'
import { useAddFavourite, useFavourites, useRemoveFromFavourites } from '../../api/favouritesApi';
import { useEffect, useState } from 'react';
export default function Details() {

    const navigate = useNavigate();
    const {bookId} = useParams();
    const {book} = useBook(bookId);
    const {deleteBook} = useDeleteBook();
    const [reload, setReload] = useState(false);
    const {addToFavourites} = useAddFavourite();
    const {getFavourites} = useFavourites();
    const {removeFromFavourites} = useRemoveFromFavourites();

    const [favouriteBooks, setFavouriteBooks] = useState([]);

    const authData = localStorage.getItem('authData');
    const userId = authData ? JSON.parse(authData)._id : null;
    
    useEffect(() => {
      const fetchFavourites = async () => {
        const fetchedFavourites = await getFavourites(userId);
        setFavouriteBooks(fetchedFavourites);
      };
    
      fetchFavourites();
    }, [userId, reload])
    
    const isFavourited = favouriteBooks?.some(fav => fav._id === bookId);
    
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
    const handleFavouriteClick = async () => {
      await addToFavourites(userId,bookId);
      setReload(prev => !prev);
    }
    const handleUnfavouriteClick = async () => {
      await removeFromFavourites(userId, bookId);
      setReload(prev => !prev);
    }
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
    {isOwner ? (
        <>
            <button onClick={handleEditClick} className="edit-btn">Edit</button>
            <button onClick={bookDeleteHandler} className="delete-btn">Delete</button>
        </>
    ) : (
        isFavourited ? (
            <>
                <button onClick={handleUnfavouriteClick} className="favourite-btn">Unfavourite</button>
            </>
        ) : (
            <>
                <button onClick={handleFavouriteClick} className="favourite-btn">Favourite</button>
            </>
        )
    )}
</div>
</div>
    </>
  );
}