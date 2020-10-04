import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parseHTML from './components/fetchData/FetchDataHelper';
import CreateImageGallery from './components/fetchData/CreateImageGallery';
import MemeInputForm from './components/memeInputForm/MemeInputForm';
import DownloadButton from './components/downloadButton/DownloadButton';

function App() {
  const [posts, setPosts] = useState([]);
  const [arrayPosition, setArrayPosition] = useState(0);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeName, setMemeName] = useState('/tenguy/');
  let memeURL = `https://api.memegen.link/images/${memeName}/${topText}/${bottomText}.jpg?preview=true&watermark=none`;

  useEffect(() => {
    axios
      .get('https://memegen.link/examples')
      .then((res) => {
        setPosts(parseHTML(res.data));
        console.log(typeof posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRightArrow = () => {
    if (
      posts[arrayPosition + 1] === posts.length ||
      arrayPosition === posts.length - 1
    ) {
      setArrayPosition(0);
    } else {
      setArrayPosition(arrayPosition + 1);
    }
  };

  const handleLeftArrow = () => {
    if (arrayPosition === 0) {
      setArrayPosition(posts.length - 1);
    } else {
      setArrayPosition(arrayPosition - 1);
    }
  };

  const flexbox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  console.log(memeURL);
  return (
    <div style={flexbox}>
      <MemeInputForm
        setBottomText={setBottomText}
        bottomText={bottomText}
        setTopText={setTopText}
        topText={topText}
      ></MemeInputForm>
      <CreateImageGallery
        handleRightArrow={handleRightArrow}
        handleLeftArrow={handleLeftArrow}
        posts={posts}
        arrayPosition={arrayPosition}
        setPosts={setPosts}
        setMemeName={setMemeName}
        memeURL={memeURL}
      />
      <DownloadButton memeURL={memeURL} />
    </div>
  );
}

export default App;
