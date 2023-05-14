import React from 'react';

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Type owner name..."
        value={searchQuery}
        onChange={handleSearch}
        style={{
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
          outline: 'none',
          transition: 'border-color 0.3s ease',
          maxWidth: '3000px%',
        }}
      />
    </div>
  );
};

export default SearchBar;
