import React, { useState } from 'react';

export default function MemeTextForm() {
  const [memeText, setMemeText] = useState('');

  const flexbox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const labelStyle = {
    font: 'sans serif',
    padding: '1em',
  };

  const input = {
    padding: '0.5em',
    margin: '8px',
  };

  function extractMemeText(meme) {
    const memeTextArray = [];
    let re = /\/[a-z]+\/([a-z_~',!]+\/[a-z_~',!]+)\.jpg/;
    //Takes information from URL needed to change the meme's text
    for (let i = 0; i < meme.length; i++) {
      memeTextArray.push(meme[i].match(re)[1]);
    }
    return memeTextArray;
  }

  const makeMeme = (urls, webText, myText) => {
    const newUrls = [];
    for (let i = 0; i < webText.length; i++) {
      newUrls.push(urls[i].replace(webText[i], myText[i]));
    }
    return newUrls;
  };

  return (
    <div>
      <form>
        <div style={flexbox}>
          <label style={labelStyle}>Enter Your Custom Text Below</label>
          <div>
            <input style={input} placeholder="Top Text"></input>
            <input style={input} placeholder="Bottom Text"></input>
          </div>
        </div>
      </form>
    </div>
  );
}
