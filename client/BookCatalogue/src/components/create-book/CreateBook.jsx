import { useNavigate } from 'react-router'
import './CreateBook.css'
import { useCreateBook } from '../../api/booksApi';

export default function CreateBook() {
  const navigate = useNavigate();
  const {create: createBook} = useCreateBook();

  const createAction = async (formData) => {
    const bookData = Object.fromEntries(formData);
    await createBook(bookData);

    navigate('/');
  }
    return (
    <>
 <div className="book-form-container">
      <h2>Create a New Book</h2>
      <form className="book-form" action={createAction}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter book title" required />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" placeholder="Enter author name" required />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input type="number" id="year" name="year" placeholder="Enter publication year" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Enter book description" required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" placeholder="Enter price" required />
        </div>

        <div className="form-group">
          <label htmlFor="imgUrl">Image URL</label>
          <input type="text" id="imgUrl" name="img" placeholder="Enter image URL" required />
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <input type="text" id="language" name="language" placeholder="Enter book language" required />
        </div>

        <button type="submit" className="submit-btn">Create Book</button>
      </form>
    </div>
    </>
    )
}