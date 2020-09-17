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
