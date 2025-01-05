import React, { useState } from 'react';
import UploadArea from './UploadArea';
import '../style.css';

function Sidebar({ onFileSelect }) {
  const [files, setFiles] = useState([]);

  const handleFileUpload = async (newFiles) => {
    const formData = new FormData();
    formData.append('file', newFiles[0]);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/upload/`, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log('File uploaded:', result);
      if (result.media_id) {
        setFiles([...files, newFiles[0]]);
        onFileSelect(result.media_id); // Pass media_id instead of URL
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleReset = () => {
    setFiles([]);
    onFileSelect(null); // Clear the media player when reset
  };

  return (
    <div className="sidebar">
      <div className="upload-container">
        <UploadArea onFileUpload={handleFileUpload} />
        <div className="file-list">
          {files.length === 0 ? (
            <p>No files uploaded yet.</p>
          ) : (
            files.map((file, index) => <p key={index}>{file.name}</p>)
          )}
        </div>
        <button className="reset-button" onClick={handleReset}>Reset Uploads</button>
      </div>
    </div>
  );
}

export default Sidebar;