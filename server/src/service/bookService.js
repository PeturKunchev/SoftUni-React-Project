import Book from "../models/Books.js";


export default {
    getAll(filter = {}) {
        return Book.find(filter);
    },
    getOne(furnitureId) {
        return Book.findById(furnitureId);
    },
    create(bookData, userId) {
        return Book.create({ ...bookData, _ownerId: userId });
    },
    update(bookId, bookData) {
        return Book.findByIdAndUpdate(bookId, bookData);
    },
    delete(bookId) {
        return Book.findByIdAndDelete(bookId);
    },
    getLatest() {        
        return Book.find().sort({createdAt: -1}).limit(3);
    }
}