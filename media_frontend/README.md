# Media Streaming Web Application

This is a full-stack media streaming web application that allows users to upload audio and video files, which can then be streamed directly through the browser. The app supports common audio and video formats, providing a simple and intuitive interface for media upload and playback.

## Features

- **File Upload**: Users can upload video and audio files through the frontend.
- **Media Streaming**: Uploaded media files are streamed directly from the server, without requiring a full download.
- **Supported Formats**:
  - **Video**: `.mp4`, `.webm`, `.mkv`
  - **Audio**: `.mp3`, `.wav`
- **Backend with FastAPI**:
  - Handles file uploads and storage.
  - Serves media files for streaming.
  - Maintains a database (SQLite) to track uploaded media.
- **Frontend with React**:
  - Provides a user-friendly interface for uploading and playing media files.
  - Uses an embedded HTML5 player for audio and video playback.
  
## Technology Stack

- **Frontend**: React, CSS
- **Backend**: FastAPI, SQLAlchemy, SQLite
- **Deployment**:
  - **Frontend**: Netlify
  - **Backend**: Render

## Setup Instructions

### Prerequisites

- Node.js and npm installed for the frontend.
- Python (version 3.7 or higher) installed for the backend.
- SQLite for the database (pre-installed with Python).

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd media_frontend
2. Install dependencies:
    ```bash
    npm install
3. Create a .env file in the root of the frontend and add the backend URL:
    ```bash
    REACT_APP_BACKEND_URL=http://127.0.0.1:8000
4. Run the development server:
    ```bash
    npm start

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd media_backend
2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    ```bash
    source venv/bin/activate  # On Linux/Mac
    ```bash
    venv\Scripts\activate     # On Windows
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
4. Create a .env file in the backend directory with the following content:
    ```bash
    DATABASE_URL=sqlite:///./media.db
5.  Manually create the SQLite database schema and media table using the following commands:
    ```bash
    sqlite3 media.db
    CREATE TABLE media (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    filepath TEXT NOT NULL,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
6. Run the backend server:
    ```bash
    uvicorn app:app --reload

#### Deployment 
 - **Frontend**: Use Netlify to deploy the React app
  - **Backend**: Deploy the FastAPI app on Render

#### License
 This project is licensed under the MIT License. See the LICENSE file for details.

#### Owner
 Developed and maintained by Adeel Ud Din, Media Technologist.
