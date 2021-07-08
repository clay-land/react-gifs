import React from 'react';

const Searchbar = ({ searchGif }) => {
  const handleChange = (event) => {
    searchGif(event.target.value);
  };

  return (
    <input type="text" className="form-control form-search" onChange={handleChange} />
  );
};


export default Searchbar;
