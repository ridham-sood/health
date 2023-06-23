import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import foods from '../../../Data/foods'
import './searchbar.css';

const SearchBar = ({ setResults }) => {
    const [inputSearch, setInputSearch] = useState("");

    const fetchData = (value) => {
        const results = foods.filter((user) => {
            return user && user.name && user.name.toLowerCase().includes(value)
        });
        setResults(results);
    }

    const handleChange = (value) => {
        setInputSearch(value);
        fetchData(value);
        if (value.trim().length === 0) {
            setResults([]);
        }
    }

    return (
        <div className="search-box">
            <FaSearch />
            <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
                value={inputSearch}
                onChange={(event) => handleChange(event.target.value)}
            />
        </div>
    )
}

export default SearchBar