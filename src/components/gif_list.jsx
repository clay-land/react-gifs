import React from 'react';
import Gif from './gif';

const GifList = ({ gifList }) => {
  return (
      <div className="giflist">
          {gifList.map(gif => <Gif gifURL={gif} key={gif}/>)}
      </div>
  );
};


export default GifList;
