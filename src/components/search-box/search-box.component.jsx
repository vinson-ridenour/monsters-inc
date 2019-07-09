import React from 'react'

import './search-box.styles.css'

// functional component (don't have access to state or lifecycle methods, dont need them)
// just a component that gets some props and returns some HTML
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)