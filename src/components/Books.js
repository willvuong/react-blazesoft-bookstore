import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

const Books = ({ books: {books}}) => {
    return (
        <>
            {books.length > 0 && books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                />
            ))}
        </>
    )
}

Books.propTypes = {
    books: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    books: state.books
})

export default connect(mapStateToProps)(Books)
