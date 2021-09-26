import { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addBook } from '../redux/actions/booksActions'

const AddBook = ({ addBook }) => {
    const [bookName, setBookName] = useState("");
    const [bookPrice, setBookPrice] = useState("");
    const [bookCategory, setBookCategory] = useState("");
    const [bookDescription, setBookDescription] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()

        if (!bookName || !bookPrice || !bookCategory || !bookDescription) {
            alert('Please enter values in the specified fields.')
            return
        }

        const add = {
            bookName,
            bookPrice,
            bookCategory,
            bookDescription
        };

        addBook(add)

        setBookName("")
        setBookPrice("")
        setBookCategory("")
        setBookDescription("")
    }

    return (
        <form className="AddBook" onSubmit={onSubmit}>

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
                    <textarea
                        value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} />
                </div>

            </div>

            <div className="button-section">
                <input id="save-button" type='submit' value='Save Book' />
            </div>

        </form>
    )
}

AddBook.propTypes = {
    addBook: PropTypes.func.isRequired
}

export default connect(null, { addBook })(AddBook)
