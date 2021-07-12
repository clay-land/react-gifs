import React from 'react';
import Gif from './gif';

const GifList = ({ gifList, selectGif }) => {
  return (
      <div className="gif-list">
          {gifList.map(gif => <Gif gifID={gif} key={gif} selectGif={selectGif} />)}
      </div>
  );
};


export default GifList;
