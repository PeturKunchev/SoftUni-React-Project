import { useContext, useEffect, useState } from 'react';
import './Profile.css'
import { UserContext } from '../../contexts/UserContext';
import { useFavourites } from '../../api/favouritesApi';
import { useBooks } from '../../api/booksApi';
import { Link } from 'react-router';
export default function Profile() {

const {_id:userId, email } = useContext(UserContext);  

const {getFavourites} = useFavourites();
const [favouriteBooks, setFavouriteBooks] = useState([]);
const {books} = useBooks();
useEffect(() => {
      const fetchFavourites = async () => {
        const fetchedFavourites = await getFavourites(userId);
        setFavouriteBooks(fetchedFavourites);
      };
    
      fetchFavourites();
    }, [userId]);

   
    const userBooks = books?.filter(book => book._ownerId === userId);
  return (
    <div className="profile-container">
      <h1 className="profile-email">{email}</h1>
      
      <div className="profile-sections">
        <div className="profile-section">
          <h2>Favourite Books</h2>
          <div className="profile-books-list">
          {favouriteBooks.length > 0 ? favouriteBooks.map(favouriteBook => (
  <Link to={`/books/${favouriteBook._id}/details`} key={favouriteBook._id}>
    <img src={favouriteBook.img} alt={favouriteBook.title} />
  </Link>
)) : <h3>No favourites yet...</h3>}
          </div>
        </div>

        <div className="profile-section">
          <h2>Created Books</h2>
          <div className="profile-books-list">
          {userBooks.length > 0 ? userBooks.map(userBook => (
  <Link to={`/books/${userBook._id}/details`} key={userBook._id}>
    <img src={userBook.img} alt={userBook.title} />
  </Link>
)) : <h3>No books created yet...</h3>}
          </div>
        </div>
      </div>
    </div>
  );
}