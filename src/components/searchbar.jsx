import React from 'react';

const Searchbar = ({ handleChange }) => {
  return (
    <input type="text" className="form-control form-search" onChange={handleChange} />
  );
};


export default Searchbar;
