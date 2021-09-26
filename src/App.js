import { useState } from 'react'

import './App.css';
import Header from './components/Header.js'
import AddBook from './components/AddBook.js'
import Books from './components/Books.js'
import Footer from './components/Footer.js'

import { Provider } from 'react-redux'
import store from './redux/store.js'

const App = () => {
  // const [showAddBook, setShowAddBook] = useState(false);

  return (
    <Provider store={store}> 
    <div className="App">
      <Header />
      <AddBook />
      <Books />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
