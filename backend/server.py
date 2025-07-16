from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Engram API", description="API for Engram early intervention center")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection placeholder
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017/engram_db')

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "Engram API is running"}

@app.get("/api/")
async def root():
    return {"message": "Welcome to Engram API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)