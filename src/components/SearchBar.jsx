import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="form-control my-3"
      placeholder="Search tables by name..."
      onChange={e => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;