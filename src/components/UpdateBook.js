import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateBook } from '../redux/actions/booksActions';

const UpdateBook = ({ book, updateBook }) => {
    const [bookName, setBookName] = useState("");
    const [bookPrice, setBookPrice] = useState("");
    const [bookCategory, setBookCategory] = useState("");
    const [bookDescription, setBookDescription] = useState("");

    useEffect(() => {
        if (book) {
            setBookName(book.bookName)
            setBookPrice(book.bookPrice)
            setBookCategory(book.bookCategory)
            setBookDescription(book.bookDescription)
        }
    }, [book])

    const onSubmit = (e) => {
        e.preventDefault()

        const update = {
            id: book.id,
            bookName,
            bookPrice,
            bookCategory,
            bookDescription
        }

        updateBook(update)

        setBookName("")
        setBookPrice("")
        setBookCategory("")
        setBookDescription("")


    }

    return (
        <form className="UpdateBook" onSubmit={onSubmit}>
            <h2>Update {book.bookName}</h2>
            <div className="form-section">
                <label>Name</label>
                <input type="text" placeholder="ex: Goosebumps"
                    value={bookName} onChange={(e) => setBookName(e.target.value)} />
            </div>

            <div className="form-section">
                <label>Price</label>
                <input type="text" placeholder="$00.00"
                    value={bookPrice} onChange={(e) => setBookPrice(e.target.value)} />
            </div>

            <div className="form-section">
                <label>Category</label>
                <input type="text" placeholder="ex: Mystery"
                    value={bookCategory} onChange={(e) => setBookCategory(e.target.value)} />
            </div>

            <div className="form-section">
                <label>Description</label>
                <textarea rows="4" cols="50"
                    value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} />
            </div>

            <input type='submit' value='Update Book' />
        </form>


    )
}

UpdateBook.propTypes = {
    updateBook: PropTypes.func.isRequired
}

export default connect(null, { updateBook })(UpdateBook)
