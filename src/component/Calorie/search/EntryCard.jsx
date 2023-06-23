import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult';

const EntryCard = ({ dates, setAdd }) => {

  const [results, setResults] = useState([]);

  return (
    <div>
      <SearchBar setResults={setResults} />
      <SearchResult results={results} dates={dates} setAdd={setAdd} />
    </div>
  )
}

export default EntryCard