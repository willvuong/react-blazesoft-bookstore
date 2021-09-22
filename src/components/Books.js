import React from 'react'
import Book from './Book'

const Books = ({ books, deleteBook }) => {
    return (
        <>
            {books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                    deleteBook={deleteBook}
                />
            ))}
        </>
    )
}

export default Books
