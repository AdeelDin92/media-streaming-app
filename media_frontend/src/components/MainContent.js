import React from 'react';
import MediaPlayer from './MediaPlayer';
import '../style.css';

function MainContent({ selectedFile }) {
  return (
    <div className="main">
      <div className="tittlecontainer">
        <h1>Media Streaming Application</h1>
        <img src="/Assets/logo.svg" alt="Logo" className="logo" />
      </div>
      <MediaPlayer file={selectedFile} />
    </div>
  );
}

export default MainContent;