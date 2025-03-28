import { useNavigate, useParams } from "react-router";
import { useBook, useEditBook } from "../../api/booksApi";
import { useState } from "react";

export default function EditBook() {
  const { bookId } = useParams();
  console.log(bookId);
  
  const navigate = useNavigate();
  const {edit: editBook} = useEditBook();
  const [error, setError] = useState("");
  const {book} = useBook(bookId);
const editAction = async (formData) => {
    const bookData = Object.fromEntries(formData);
    if (bookData.title.length < 2) {
      setError("Title must be at least 2 characters long!");
      return;
    }
    if (bookData.author.length < 2) {
      setError("Author name must be at least 2 characters long!");
      return;
    }
    if (bookData.year >= 2026) {
      setError("Please enter a valid year ");
      return;
    }
    if (bookData.description.length < 10) {
      setError("Description must be at least 10 characters long!");
      return;
    }
    if (bookData.price < 0) {
      setError("Please enter a valid price!");
      return;
    }
    
    await editBook(bookId,bookData);

    navigate(-1);
  }
  return (
    <>
    <div className="book-form-container">
      <h2>Edit your Book</h2>
      <form className="book-form" action={editAction}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter book title" required defaultValue={book.title}/>
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" placeholder="Enter author name" required defaultValue={book.author}/>
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input type="number" id="year" name="year" placeholder="Enter publication year" required defaultValue={book.year}/>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Enter book description" required defaultValue={book.description}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" placeholder="Enter price" required defaultValue={book.price}/>
        </div>

        <div className="form-group">
          <label htmlFor="imgUrl">Image URL</label>
          <input type="text" id="imgUrl" name="img" placeholder="Enter image URL" required defaultValue={book.img}/>
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <input type="text" id="language" name="language" placeholder="Enter book language" required defaultValue={book.language}/>
        </div>

        <button type="submit" className="submit-btn">Edit Book</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
    </>
  );
}