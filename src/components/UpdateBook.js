import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateBook } from '../redux/actions/booksActions';

const UpdateBook = ({ book, updateBook }) => {
    const [bookName, setBookName] = useState("");
    const [bookPrice, setBookPrice] = useState("");
    const [bookCategory, setBookCategory] = useState("");
    const [bookDescription, setBookDescription] = useState("");

    const [closeUpdateBook, setCloseUpdateBook] = useState("false");

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

    const onUpdate = () => {
        setCloseUpdateBook(!closeUpdateBook);
        alert(`Successfully updated: ${bookName}`)
    }

    return (
        <div className={closeUpdateBook ? "UpdateBook" : "UpdateBookClose"}>
            <form className="update-book-modal" onSubmit={onSubmit}>

                <h2 id="update-book-h2">Update {book.bookName}</h2>
                <i id="update-book-x" class="fas fa-times fa-2x" onClick={() => setCloseUpdateBook(!closeUpdateBook)}></i>

                <div className="form-section">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="ex: Goosebumps"
                            value={bookName} onChange={(e) => setBookName(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" placeholder="$00.00"
                            value={bookPrice} onChange={(e) => setBookPrice(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <input type="text" placeholder="ex: Mystery"
                            value={bookCategory} onChange={(e) => setBookCategory(e.target.value)} />
                    </div>
                </div>

                <div className="form-section">
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows="4" cols="50"
                            value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} />
                    </div>
                </div>

                <div className="button-section">
                    <input className="save-button" type='submit' value='Update Book' onClick={onUpdate}/>
                </div>

            </form>
        </div>

    )
}

UpdateBook.propTypes = {
    updateBook: PropTypes.func.isRequired
}

export default connect(null, { updateBook })(UpdateBook)
