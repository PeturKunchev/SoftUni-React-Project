import { useEffect, useState } from "react";
import requester from "../utils/requester";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/bookCatalog';

export const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        requester.get(baseUrl).then(setBooks)
    },[]);
    return {books};
}

export const useBook = (bookId) => {
    const [book, setBook] = useState({});

    useEffect(() => {
        requester.get(`${baseUrl}/${bookId}`)
            .then(setBook);
    }, [bookId])

    return {
        book,
    };
};

export const useCreateBook = () => {
    const { request } = useAuth();

    const create = (bookData) =>
        request.post(baseUrl, bookData);

    return {
        create,
    }
};

export const useEditBook = () => {
    const {request} = useAuth();

    const edit = (bookId,bookData) => request.put(`${baseUrl}/${bookId}`,{...bookData,_id: bookId});

    return {
        edit,
    }
}

export const useDeleteBook = () => {
    const { request } = useAuth();

    const deleteBook = (bookId) =>
        request.delete(`${baseUrl}/${bookId}`);

    return {
        deleteBook,
    }
};