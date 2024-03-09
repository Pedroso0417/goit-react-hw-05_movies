// SearchBar.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import css from './SearchBar.module.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = e => {
    e.preventDefault();
    // Redirect to the Movies page with the search query
    history.push(`/movies?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className={css.input}
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
