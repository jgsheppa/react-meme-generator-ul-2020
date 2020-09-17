import React from 'react';
import './App.css';
import FetchData from './components/fetchData/FetchData';
import MemeInputForm from './components/memeInputForm/MemeInputForm';
import DownloadButton from './components/downloadButton/DownloadButton';

function App() {
  const flexbox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div>
      <div style={flexbox}>
        <MemeInputForm></MemeInputForm>
        <FetchData />
        <DownloadButton></DownloadButton>
      </div>
    </div>
  );
}

export default App;
