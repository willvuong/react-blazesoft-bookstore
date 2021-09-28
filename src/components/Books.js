import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

const Books = ({ books: { books } }) => {
    return (
        <div className="Books">
            <table className="books-table">
                {books.length > 0 && <h2 id="books-table-h2">Books</h2>}
                {books.length > 0 &&
                    <tr className="table-headings">
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                }
                {books.length > 0 && books.map((book) => (
                    <Book
                        key={book.id}
                        book={book}
                    />
                ))}
            </table>
        </div>
    )
}

Books.propTypes = {
    books: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    books: state.books
})

export default connect(mapStateToProps)(Books)
