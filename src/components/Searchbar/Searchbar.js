import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Searchbar/Searchbar.css';

export default function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');
  // state = {
  //   searchName: '',
  // };

  const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      alert('Введите название искомого объекта');
      return;
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="searchName"
          value={searchName}
          onChange={handleNameChange}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
