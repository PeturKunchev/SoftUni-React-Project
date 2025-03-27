import { model, Schema, Types } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        minLength: 2,
    },
    author: {
        type: String,
        minLength: 2,
    },
    year: {
        type: Number,
        max: 2026,
    },
    description: {
        type: String,
        minLength: 10,
    },
    price: {
        type: Number,
        min: 0
    },
    img: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    _ownerId: {
        type: Types.ObjectId,
        ref: 'User',
    },
    
},{ timestamps: true });

const Book = model('Book', bookSchema);

export default Book;
