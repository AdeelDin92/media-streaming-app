import React, { useState } from 'react';
import '../style.css';

function UploadArea({ onFileUpload }) {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const files = Array.from(event.dataTransfer.files);
    onFileUpload(files);
  };

  const handleBrowseFiles = (event) => {
    const files = Array.from(event.target.files);
    onFileUpload(files);
  };

  return (
    <div
      className={`upload-area ${dragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag and Drop your files here</p>
      <button type="button" onClick={() => document.getElementById('fileInput').click()}>
        Browse Files
      </button>
      <input type="file" id="fileInput" multiple hidden onChange={handleBrowseFiles} />
    </div>
  );
}

export default UploadArea;
