import React, { useState } from 'react';
import { makeMeme, extractMemeText } from './MemeInputFormHelper';

export default function MemeTextForm(props) {
  const [newMemeText, setNewMemeText] = useState('');

  const onSubmit = (data) => {
    setNewMemeText(`
      ${data.myMeme.split(' ').join('_')}/${data.myMeme2
      .split(' ')
      .join('_')}`);

    props.setURL(
      makeMeme(
        props.posts[props.arrayPosition],
        extractMemeText(props.posts[props.arrayPosition]),
        newMemeText,
      ),
    );
  };

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

  return (
    <div>
      <form>
        <div style={flexbox}>
          <label style={labelStyle}>Enter Your Custom Text Below</label>
          <form onSubmit={props.handleSubmit(onSubmit)}>
            <div>
              <input
                style={input}
                placeholder="Enter Your Meme Text"
                ref={props.register}
                name="myMeme"
              ></input>
              <input
                style={input}
                placeholder="Enter Your Meme Text"
                ref={props.register}
                name="myMeme2"
              ></input>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </form>
    </div>
  );
}
