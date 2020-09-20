import React from 'react';

export default function MemeTextForm(props) {
  const flexbox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const labelStyle = {
    font: 'sans serif',
    fontWeight: 'bold',
    padding: '1em',
  };

  const input = {
    padding: '0.5em',
    margin: '8px',
  };

  function handleTopChange(e) {
    props.setTopText(e.target.value);
  }

  function handleBottomChange(e) {
    props.setBottomText(e.target.value);
  }
  return (
    <div>
      <div style={flexbox}>
        <label style={labelStyle}>Enter Your Custom Meme Text</label>
        <div>
          <input
            style={input}
            value={props.topText}
            onChange={handleTopChange}
          ></input>
          <input
            value={props.bottomText}
            style={input}
            onChange={handleBottomChange}
            // placeholder="Enter Your Meme Text"
          ></input>
        </div>
      </div>
    </div>
  );
}
