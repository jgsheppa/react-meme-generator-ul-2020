import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parseHTML from './components/fetchData/FetchDataHelper';
import CreateImageGallery from './components/fetchData/CreateImageGallery';
import MemeInputForm from './components/memeInputForm/MemeInputForm';
import DownloadButton from './components/downloadButton/DownloadButton';
import { useForm } from 'react-hook-form';

function App() {
  const [posts, setPosts] = useState('');
  const [arrayPosition, setArrayPosition] = useState(0);
  const { register, handleSubmit } = useForm();
  const [newMemeText, setNewMemeText] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeName, setMemeName] = useState('/tenguy/');
  let memeURL = `https://api.memegen.link/images${memeName}${topText}/${bottomText}.jpg?preview=true&watermark=none`;

  useEffect(() => {
    axios
      .get('https://memegen.link/examples')
      .then((res) => {
        setPosts(parseHTML(res.data));
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

  console.log(memeURL);
  return (
    <div>
      <div style={flexbox}>
        <MemeInputForm
          setBottomText={setBottomText}
          bottomText={bottomText}
          setTopText={setTopText}
          topText={topText}
          setNewMemeText={setNewMemeText}
          newMemeText={newMemeText}
          register={register}
          handleSubmit={handleSubmit}
          posts={posts}
          arrayPosition={arrayPosition}
          setPosts={setPosts}
          setMemeName={setMemeName}
          memeURL={memeURL}
        ></MemeInputForm>
        <CreateImageGallery
          handleRightClick={handleRightClick}
          handleLeftClick={handleLeftClick}
          posts={posts}
          arrayPosition={arrayPosition}
          setPosts={setPosts}
          setMemeName={setMemeName}
          memeName={memeName}
          memeURL={memeURL}
        />
        <DownloadButton
          setBottomText={setBottomText}
          bottomText={bottomText}
          setTopText={setTopText}
          topText={topText}
          memeURL={memeURL}
        />
      </div>
    </div>
  );
}

export default App;
