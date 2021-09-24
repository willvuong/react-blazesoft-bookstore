import React from 'react'
import Book from './Book'

const Books = ({ books, deleteBook, updateBook}) => {
    return (
        <>
            {books.length > 0 && books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                    deleteBook={deleteBook}
                    updateBook={updateBook}
                />
            ))}
        </>
    )
}

export default Books
