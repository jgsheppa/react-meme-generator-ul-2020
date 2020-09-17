import React, { useState } from 'react';

export default function DownloadButton() {
  const [posts, setPosts] = useState('');

  const downloadButtonStyle = {
    fontSize: '20px',
    fontColor: 'black',
    borderRadius: '8px',
    backgroundColor: 'grey',
    padding: '1em',
  };

  return (
    <div>
      <a>
        <button style={downloadButtonStyle}>Download</button>
      </a>
    </div>
  );
}
