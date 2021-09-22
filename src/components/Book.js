import React from 'react'

const Book = ({ book, deleteBook}) => {
    return (
        <div className="Book">
            <h2>Book</h2>
            <p>Book Name: {book.bookName}</p>
            <p>Book Price: {book.bookPrice}</p>
            <p>Book Category: {book.bookCategory}</p>
        </div>
    )
}

export default Book
