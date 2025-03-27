import './BookCatalogItem.css'
export default function BookCatalogueItem(
_id,
title,
author,
price
) {
  return (
    <>
    <div className="book-item">
      <img src="https://www.ciela.com/media/catalog/product/cache/9a7ceae8a5abbd0253425b80f9ef99a5/g/l/glina-soft-pres.jpg" alt="Book Cover" className="book-img" />
      <div className="book-details">
        <h3 className="book-title">The Great Gatsby</h3>
        <p className="book-author">F. Scott Fitzgerald</p>
        <p className="book-price">$10.99</p>
      </div>
    </div>
    </>
  );
}