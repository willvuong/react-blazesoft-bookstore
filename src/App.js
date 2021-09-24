import { useState } from 'react'

import './App.css';
import Header from './components/Header.js'
import AddBookButton from './components/AddBookButton'
import AddBook from './components/AddBook.js'
import Books from './components/Books'

import { Provider } from 'react-redux'
import store from './store.js'

const App = () => {
  const [books, setBooks] = useState([]);
  const [showAddBook, setShowAddBook] = useState(false);

  // add book
  const addBook = (book) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newBook = { id, ...book };
    setBooks([...books, newBook]);
  }

  // delete book
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  // update book 
  const updateBook = (id, bookEntry) => {

    const update = books.map(book => {
      if (book.id === id) { // setBooks([bookEntry])
        book = bookEntry
      }
      return book;
    });

    setBooks(update);
  }

  return (
    <Provider store={store}> 
    <div className="App">
      <Header />
      <AddBookButton
        icon={showAddBook ? <i class="fas fa-times fa-2x"></i> : <i class="fas fa-plus fa-2x"></i>}
        onClick={() => setShowAddBook(!showAddBook)}
      />
      {showAddBook && <AddBook addBook={addBook} />}
      <Books books={books} deleteBook={deleteBook} updateBook={updateBook} />
    </div>
    </Provider>
  );
}

export default App;
