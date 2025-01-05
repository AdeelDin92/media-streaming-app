import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';


function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="container">
      <Sidebar onFileSelect={setSelectedFile} />
      <MainContent selectedFile={selectedFile} />
    </div>
  );
}

export default App;