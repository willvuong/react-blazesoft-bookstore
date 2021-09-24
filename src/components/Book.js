import { useState } from 'react'
import UpdateBook from './UpdateBook'

const Book = ({ book, deleteBook, updateBook}) => {
    const [showUpdateBook, setUpdateBook] = useState(false);

    return (
        <div className="Book">
            <h2>{book.bookName}</h2>
            <p>Price: {book.bookPrice}</p>
            <p>Category: {book.bookCategory}</p>
            <p>Description: {book.bookDescription}</p>
            <i class="fas fa-times" onClick={() => deleteBook(book.id)}></i>
            
            <i class="fas fa-pen" onClick={() => setUpdateBook(!showUpdateBook)}></i>
            {showUpdateBook && <UpdateBook book={book} updateBook={updateBook}/>}
        </div>
    )
}

export default Book
