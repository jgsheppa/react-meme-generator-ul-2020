import React from 'react';
import './FetchData.css';

export default function CreateImageGallery(props) {
  props.setMemeName(props.posts[props.arrayPosition]);

  const imgStyles = {
    maxWidth: '1000px',
    maxHeight: '1000px',
  };

  return (
    <div>
      <div className="flexbox">
        <button className="button" onClick={props.handleLeftClick}>
          <span className="arrow left"></span>
        </button>
        <div style={imgStyles}>
          <img src={props.memeURL} style={imgStyles} alt="This is a meme" />
        </div>
        <button className="button" onClick={props.handleRightClick}>
          <span className="arrow right"></span>
        </button>
      </div>
    </div>
  );
}
