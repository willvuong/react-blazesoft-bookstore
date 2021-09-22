import React from 'react'

const AddBookButton = ({ icon, onClick }) => {
    return (
        <div className="AddBookButton" onClick={onClick}>
            {icon}
        </div>
    )
}

export default AddBookButton
