import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK} from './types'

export const addBook = (book) =>  dispatch => {
    dispatch({
        type: ADD_BOOK,
        payload: book
    })
}

export const deleteBook = (id) =>  dispatch => {
    dispatch({
        type: DELETE_BOOK,
        payload: id
    })
}

export const updateBook = (bookEntry) =>  dispatch => {
    dispatch({
        type: UPDATE_BOOK,
        payload: bookEntry
    })
}