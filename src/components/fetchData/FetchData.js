import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import './FetchData.css';
import parseHTML from './Helper';

export default function FetchData(props) {
  // const [posts, setPosts] = useState('');
  // const [arrayPosition, setArrayPosition] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get('https://memegen.link/examples')
  //     .then((res) => {
  //       setPosts(parseHTML(res.data));
  //       console.log(parseHTML(res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const handleRightClick = () => {
  //   if (
  //     posts[arrayPosition + 1] === posts.length ||
  //     arrayPosition === posts.length - 1
  //   ) {
  //     setArrayPosition(0);
  //   } else {
  //     setArrayPosition(arrayPosition + 1);
  //   }
  // };

  // const handleLeftClick = () => {
  //   if (arrayPosition === 0) {
  //     setArrayPosition(posts.length - 1);
  //   } else {
  //     setArrayPosition(arrayPosition - 1);
  //   }
  // };

  return (
    <div>
      <div className="flexbox">
        <button onClick={props.handleLeftClick}>
          <span className="arrow left"></span>
        </button>
        <img src={props.posts[props.arrayPosition]} alt="This is a meme" />
        <button onClick={props.handleRightClick}>
          <span className="arrow right"></span>
        </button>
      </div>
    </div>
  );
}
