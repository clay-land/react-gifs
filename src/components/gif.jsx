import React from 'react';

const Gif = ({ gifURL }) => {
  return (
      <div className="Gif">
          <img src={gifURL} alt="gif" />
      </div>
  );
};


export default Gif;