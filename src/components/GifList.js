import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id}
    gif={image}
    onGifSelect={props.onGifSelect} />
  });

  return (
   // <ul>{gifItems}</ul>
   <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;