import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(cats => [inputValue,...cats]);
        setInputValue("");
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


