import { useState } from 'react'
import UpdateBook from './UpdateBook'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { deleteBook } from '../redux/actions/booksActions'

const Book = ({ book, deleteBook }) => {
    const [showUpdateBook, setUpdateBook] = useState(false);

    return (
        <tr className="Book">
            <td>{book.bookName}</td>
            <td>{book.bookPrice}</td>
            <td>{book.bookCategory}</td>
            <td>{book.bookDescription}</td>

            <div className="book-buttons">
                <i class="fas fa-pen" onClick={() => setUpdateBook(!showUpdateBook)}></i>
                <i class="fas fa-times" onClick={() => deleteBook(book.id)}></i>
            </div>

            {showUpdateBook && <UpdateBook book={book} />}
        </tr>
    )
}

Book.propTypes = {
    deleteBook: PropTypes.func.isRequired
}

export default connect(null, { deleteBook })(Book)