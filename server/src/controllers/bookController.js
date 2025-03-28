import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import bookService from "../service/bookService.js";

const bookController = Router();

// function buildFilter(query) {
//     const filterResult = Object.keys(query).reduce((filter, filterParam) => {
//         const filterParamValue = query[filterParam].replaceAll('"', '');

//         const searchParams = new URLSearchParams(filterParamValue);
        
//         return { ...filter, ...Object.fromEntries(searchParams.entries()) };
//     }, {})

//     return filterResult
// };

//Get latest
bookController.get('/latest', async (req,res)=>{
    const latestBooks = await bookService.getLatest();
    res.json(latestBooks);
})
// Get all
bookController.get('/', async (req, res) => {

    const books = await bookService.getAll();

    res.json(books);
});

// Get one
bookController.get('/:bookId', async (req, res) => {
    const books = await bookService.getOne(req.params.bookId);

    res.json(books);
});



// Create
bookController.post('/', isAuth, async (req, res) => {
    const bookData = req.body;
    const userId = req.user.id;

    const newBook = await bookService.create(bookData, userId);

    res.json(newBook);
});

// Update
bookController.put('/:bookId', isAuth, async (req, res) => {
    const bookId = req.params.bookId;
    const bookData = req.body;

    const updatedBook = await bookService.update(bookId, bookData);

    res.json(updatedBook);
});

// Delete
bookController.delete('/:bookId',isAuth, async (req, res) => {
    const bookId = req.params.bookId;

    await bookService.delete(bookId);

    res.json({ ok: true });
});

export default bookController;
