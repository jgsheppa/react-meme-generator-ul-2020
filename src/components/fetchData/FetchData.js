import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import './FetchData.css';

export default function FetchData() {
  const [posts, setPosts] = useState('');
  const [arrayPosition, setArrayPosition] = useState(0);

  const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const urlMeme = $('.meme-img');
    return createMemeArray(urlMeme);
  };

  const createMemeArray = (meme) => {
    const memeArray = [];
    for (let i = 0; i < meme.length; i++) {
      memeArray.push(meme[i].attribs.src);
    }
    return memeArray;
  };

  const concatURLs = (array) => {
    const urlArray = [];
    const baseUrl = 'https://api.memegen.link/images';
    for (let i = 0; i < array.length; i++) {
      urlArray.push(baseUrl + array[i].toString());
      console.log();
    }
    return urlArray;
  };

  useEffect(() => {
    axios
      .get('https://memegen.link/examples')
      .then((res) => {
        setPosts(concatURLs(parseHTML(res.data)));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRightClick = () => {
    if (posts[arrayPosition + 1] === posts.length) {
      setArrayPosition(0);
    } else {
      setArrayPosition(arrayPosition + 1);
    }
  };

  const handleLeftClick = () => {
    if (arrayPosition === 0) {
      setArrayPosition(posts.length - 1);
    } else {
      setArrayPosition(arrayPosition - 1);
    }
  };

  return (
    <div>
      <div className="flexbox">
        <button onClick={handleLeftClick}>
          <span className="arrow left"></span>
        </button>
        <img src={posts[arrayPosition]} alt="This is a meme" />
        <button onClick={handleRightClick}>
          <span className="arrow right"></span>
        </button>
      </div>
    </div>
  );
}
