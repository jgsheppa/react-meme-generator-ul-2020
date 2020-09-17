import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function MemeTextForm(props) {
  const [newMemeText, setNewMemeText] = useState('');
  const { register, handleSubmit, errors } = useForm();

  function extractMemeText(meme) {
    let re = /\/[a-z]+\/([a-z_~',!]+\/[a-z_~',!]+)\.jpg/;
    return meme.match(re)[1];
  }

  const makeMeme = (urls, webText, myText) => {
    let newUrls = urls.replace(webText, myText);
    return newUrls;
  };

  const onSubmit = (data) => {
    setNewMemeText(data.myMeme);

    if (newMemeText !== '') {
      makeMeme(
        props.posts[props.arrayPosition],
        extractMemeText(props.posts[props.arrayPosition]),
        newMemeText,
      );
    }
    console.log(
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                style={input}
                placeholder="Enter Your Meme Text"
                ref={register}
                name="myMeme"
              ></input>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </form>
    </div>
  );
}
