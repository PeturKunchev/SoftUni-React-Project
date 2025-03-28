import { useNavigate } from 'react-router'
import './CreateBook.css'
import { useCreateBook } from '../../api/booksApi';
import { useEffect, useState } from 'react';

export default function CreateBook() {
  const navigate = useNavigate();
  const {create: createBook} = useCreateBook();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year:"",
    description: "",
    price: "",
    img: "",
    language: "",
});
  useEffect(()=>{
    console.log("hui");
    
  },[formData])
  const createAction = async (formData) => {
    const bookData = Object.fromEntries(formData);
    setFormData(bookData);

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
          <input type="text" id="title" name="title" placeholder="Enter book title" required defaultValue={formData.title}/>
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" placeholder="Enter author name" required defaultValue={formData.author}/>
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input type="number" id="year" name="year" placeholder="Enter publication year" required defaultValue={formData.year}/>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Enter book description" required defaultValue={formData.description}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" placeholder="Enter price" required defaultValue={formData.price}/>
        </div>

        <div className="form-group">
          <label htmlFor="imgUrl">Image URL</label>
          <input type="text" id="imgUrl" name="img" placeholder="Enter image URL" required defaultValue={formData.img}/>
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <input type="text" id="language" name="language" placeholder="Enter book language" required defaultValue={formData.language}/>
        </div>

        <button type="submit" className="submit-btn">Create Book</button>
        {/* {error && <p className="error-message">{error}</p>} */}
      </form>
    </div>
    </>
    )
}