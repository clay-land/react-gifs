import React from 'react';

const Gif = ({ gifID, selectGif }) => {
  const src = `https://media2.giphy.com/media/${gifID}/200.gif`;

  const handleClick = () => {
    selectGif(gifID);
  };

  return (
      <div className="gif">
          <img src={src} alt="gif" onClick={handleClick} />
      </div>
  );
};


export default Gif;
