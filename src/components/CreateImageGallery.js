import React from 'react';
import './FetchData.css';

const imgStyles = {
  maxWidth: '800px',
  maxHeight: '800px',
};

export default function CreateImageGallery(props) {
  props.setMemeName(props.posts[props.arrayPosition]);

  return (
    <div>
      <div className="flexbox">
        <button className="button" onClick={props.handleLeftArrow}>
          <span className="arrow left"></span>
        </button>
        <div style={imgStyles}>
          <img src={props.memeURL} style={imgStyles} alt="This is a meme" />
        </div>
        <button className="button" onClick={props.handleRightArrow}>
          <span className="arrow right"></span>
        </button>
      </div>
    </div>
  );
}
