import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ onChange }) => {
  return (

    <div>
      <label htmlFor="search" className="search-bar__label">
        <span>Search congressperson</span>
      </label>
      <input type="search" id="search" name="search" onChange={onChange} />
    </div>

  )
};

export default SearchBar;