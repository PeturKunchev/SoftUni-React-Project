import BookCatalogueItem from "./book-catalog-item/BookCatalogItem";
import "./BookCatalog.css"
export default function BookCatalog() {
  return (
    <>
    <div className="catalogue-container">
      <h2>Catalogue</h2>
      <div className="book-list">
        <BookCatalogueItem />
        <BookCatalogueItem />
        <BookCatalogueItem />
        <BookCatalogueItem />
        <BookCatalogueItem />
        <BookCatalogueItem />
        <BookCatalogueItem />
        <BookCatalogueItem />
        <BookCatalogueItem />
        <BookCatalogueItem />
        <BookCatalogueItem />
        <BookCatalogueItem />
        {/* Add more <BookItem /> components as needed */}
      </div>
    </div>
    </>
  );
}