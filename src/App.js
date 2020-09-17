import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parseHTML from './components/fetchData/Helper';
import FetchData from './components/fetchData/FetchData';
import MemeInputForm from './components/memeInputForm/MemeInputForm';
import DownloadButton from './components/downloadButton/DownloadButton';

function App() {
  const [posts, setPosts] = useState('');
  const [arrayPosition, setArrayPosition] = useState(0);

  useEffect(() => {
    axios
      .get('https://memegen.link/examples')
      .then((res) => {
        setPosts(parseHTML(res.data));
        console.log(parseHTML(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRightClick = () => {
    if (
      posts[arrayPosition + 1] === posts.length ||
      arrayPosition === posts.length - 1
    ) {
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
  const flexbox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div>
      <div style={flexbox}>
        <MemeInputForm></MemeInputForm>
        <FetchData
          handleRightClick={handleRightClick}
          handleLeftClick={handleLeftClick}
          posts={posts}
          arrayPosition={arrayPosition}
        />
        <DownloadButton></DownloadButton>
      </div>
    </div>
  );
}

export default App;
