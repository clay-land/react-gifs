import React from 'react';

const Gif = ({ gifID }) => {
  const src = `https://media2.giphy.com/media/${gifID}/200.gif`
  return (
      <div className="gif">
          <img src={src} alt="gif" />
      </div>
  );
};


export default Gif;