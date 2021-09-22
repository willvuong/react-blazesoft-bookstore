import { useState } from 'react'

const AddBook = ({ addBook }) => {
    const [bookName, setBookName] = useState("");
    const [bookPrice, setBookPrice] = useState("");
    const [bookCategory, setBookCategory] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!bookName || !bookPrice || !bookCategory ) {
            alert('Please enter values in the specified fields.')
            return
        }

        addBook({bookName, bookPrice, bookCategory})

        
        setBookName("dsf")
        setBookPrice("")
        setBookCategory("")

    }

    return (
        <form className="AddBook" onSubmit={onSubmit}>
            <div className="form-section">
                <label>Name</label>
                <input type="text" placeholder="ex: Goosebumps"
                value={bookName} onChange={(e) => setBookName(e.target.value)}/>
            </div>

            <div className="form-section">
                <label>Price</label>
                <input type="text" placeholder="$00.00"
                value={bookPrice} onChange={(e) => setBookPrice(e.target.value)}/>
            </div>

            <div className="form-section">
                <label>Book Category</label>
                <input type="text" placeholder="ex: Mystery"
                value={bookCategory} onChange={(e) => setBookCategory(e.target.value)}/>
            </div>

            <input type='submit' value='Save Book' />
        </form>
    )
}

export default AddBook
