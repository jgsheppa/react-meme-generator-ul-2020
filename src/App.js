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
  const [url, setURL] = useState('');
  const { register, handleSubmit } = useForm();

  console.log(typeof url);

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

  return (
    <div>
      <div style={flexbox}>
        <MemeInputForm
          register={register}
          handleSubmit={handleSubmit}
          posts={posts}
          arrayPosition={arrayPosition}
          setPosts={setPosts}
          url={url}
          setURL={setURL}
        ></MemeInputForm>
        <CreateImageGallery
          handleRightClick={handleRightClick}
          handleLeftClick={handleLeftClick}
          posts={posts}
          arrayPosition={arrayPosition}
          url={url}
          setURL={setURL}
        />
        <DownloadButton url={url} setURL={setURL} />
      </div>
    </div>
  );
}

export default App;
