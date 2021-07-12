import React from 'react';
import Gif from './gif';

const GifList = ({ gifList }) => {
  return (
      <div className="gif-list">
          {gifList.map(gif => <Gif gifID={gif} key={gif}/>)}
      </div>
  );
};


export default GifList;
