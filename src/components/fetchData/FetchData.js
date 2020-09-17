import React from 'react';
import './FetchData.css';

export default function FetchData(props) {
  return (
    <div>
      <div className="flexbox">
        <button onClick={props.handleLeftClick}>
          <span className="arrow left"></span>
        </button>
        <div className="meme">
          <img src={props.posts[props.arrayPosition]} alt="This is a meme" />
        </div>
        <button onClick={props.handleRightClick}>
          <span className="arrow right"></span>
        </button>
      </div>
    </div>
  );
}
