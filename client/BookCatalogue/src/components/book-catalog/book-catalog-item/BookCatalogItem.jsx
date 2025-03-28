import { Link } from 'react-router'
import './BookCatalogItem.css'
export default function BookCatalogueItem(
{_id,
title,
author,
price,
img}
) {

  return (
    <>
    <div className="book-item">
      <img src={img} alt="Book Cover" className="book-img" />
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <p className="book-price">${price}</p>
        <Link to={`/books/${_id}/details`} className='details-button'>Details</Link>
      </div>
    </div>
    </>
  );
}