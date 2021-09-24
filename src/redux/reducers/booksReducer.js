import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK} from '../actions/types'

const initialState = {
    books: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_BOOK:
            const id = Math.floor(Math.random() * 1000) + 1;
            const newBook = { id, ...action.payload} 
            return {
                ...state,
                books: [...state.books, newBook]
            }
        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload)
            }
        case UPDATE_BOOK:
            const update = state.books.map(book => {
                    if(book.id === action.payload.id) {
                        book = action.payload
                    }
                    return book;
                })
            return {
                ...state,
                books: update
            }
        default:
            return state;
    }
}