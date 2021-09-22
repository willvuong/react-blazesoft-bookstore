import { useState } from 'react'

import './App.css';
import Header from './components/Header.js'

function App() {
  const [book, addBook] = useState([]);
  const [showAddBook, setShowAddBook] = useState(false);

  
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
