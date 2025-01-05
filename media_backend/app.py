# app.py
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
from database import SessionLocal
from models import Media
import os
from datetime import datetime
import logging

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://snazzy-gnome-7ff020.netlify.app"],  # Replace with your Netlify frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.on_event("startup")
async def startup_event():
    logger.info("Server is running successfully on http://127.0.0.1:8000")


@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    try:
        with SessionLocal() as db:
            media = Media(filename=file.filename, filepath=file_path, uploaded_at=datetime.utcnow())
            db.add(media)
            db.commit()
            db.refresh(media)
            return {"message": "File uploaded successfully", "media_id": media.id}
    except SQLAlchemyError as e:
        logger.error(f"Database error: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")


@app.get("/media/{media_id}")
def stream_media(media_id: int):
    try:
        with SessionLocal() as db:
            media = db.query(Media).filter(Media.id == media_id).first()
            if not media:
                raise HTTPException(status_code=404, detail="Media not found")
            
            return FileResponse(media.filepath)
    except SQLAlchemyError as e:
        logger.error(f"Database error: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")
