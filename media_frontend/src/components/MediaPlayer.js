import React from 'react';
import '../style.css';

function MediaPlayer({ file }) {
  if (!file) {
    return <h3>Select a video or audio file to play.</h3>;
  }

  // Construct media URL using the media ID
  const mediaUrl = `${process.env.REACT_APP_BACKEND_URL}/media/${file}`;

  return (
    <div className="media-player">
      <video className="video-player" controls>
        <source src={mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default MediaPlayer;
