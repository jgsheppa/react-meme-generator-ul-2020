import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parseHTML from './util/parseHTML';
import CreateImageGallery from './components/CreateImageGallery';
import MemeInputForm from './components/MemeInputForm';
import DownloadButton from './components/DownloadButton';

const flexbox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function App() {
  const [posts, setPosts] = useState([]);
  const [arrayPosition, setArrayPosition] = useState(0);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeName, setMemeName] = useState('tenguy');
  const memeURL = `https://api.memegen.link/images/${memeName}/${topText}/${bottomText}.jpg?preview=true&watermark=none`;

  console.log(memeName);

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
    posts[arrayPosition + 1] === posts.length ||
    arrayPosition === posts.length - 1
      ? setArrayPosition(0)
      : setArrayPosition(arrayPosition + 1);
  };

  const handleLeftArrow = () => {
    arrayPosition === 0
      ? setArrayPosition(posts.length - 1)
      : setArrayPosition(arrayPosition - 1);
  };

  // if (!memeName) {
  //   return <h3>Loading...</h3>;
  // }
  return (
    <div style={flexbox}>
      <MemeInputForm
        setBottomText={setBottomText}
        bottomText={bottomText}
        setTopText={setTopText}
        topText={topText}
      />
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
