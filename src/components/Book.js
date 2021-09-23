import React from 'react'

const Book = ({ book, deleteBook}) => {
    return (
        <div className="Book">
            <h2>{book.bookName}</h2>
            <p>Price: {book.bookPrice}</p>
            <p>Category: {book.bookCategory}</p>
            <p>Description: {book.bookDescription}</p>
            <i class="fas fa-times" onClick={() => deleteBook(book.id)}></i>
            <i class="fas fa-pen"></i>
        </div>
    )
}

export default Book
