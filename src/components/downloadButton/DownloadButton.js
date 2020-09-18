import React from 'react';

export default function DownloadButton(props) {
  console.log(props.url);
  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([{ buffer }]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image.jpg'); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const downloadButtonStyle = {
    fontSize: '20px',
    fontColor: 'black',
    borderRadius: '8px',
    backgroundColor: 'rgb(134, 166, 175)',
    padding: '1em',
  };

  return (
    <div>
      <a>
        <button
          onClick={(e) => download(e)}
          style={downloadButtonStyle}
          href={props.url}
          download
        >
          Download
        </button>
      </a>
    </div>
  );
}
