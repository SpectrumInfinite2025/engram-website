from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import os
from dotenv import load_dotenv
from datetime import datetime

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

# Pydantic models for contact forms
class ContactFormData(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: str
    message: str
    service_interest: Optional[str] = None

class NewsletterSubscription(BaseModel):
    email: EmailStr

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "Engram API is running"}

@app.get("/api/")
async def root():
    return {"message": "Welcome to Engram API"}

@app.post("/api/contact")
async def submit_contact_form(form_data: ContactFormData):
    """Submit contact form data"""
    try:
        # In a real application, you would save this to a database
        # For now, we'll just return a success response
        contact_data = {
            "id": f"contact_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
            "name": form_data.name,
            "email": form_data.email,
            "phone": form_data.phone,
            "subject": form_data.subject,
            "message": form_data.message,
            "service_interest": form_data.service_interest,
            "submitted_at": datetime.now().isoformat(),
            "status": "received"
        }
        
        # TODO: Save to database
        # TODO: Send notification email
        
        return {
            "success": True,
            "message": "Thank you for your message. We'll get back to you within 24 hours.",
            "contact_id": contact_data["id"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@app.post("/api/newsletter")
async def subscribe_newsletter(subscription: NewsletterSubscription):
    """Subscribe to newsletter"""
    try:
        # In a real application, you would save this to a database
        # For now, we'll just return a success response
        subscription_data = {
            "email": subscription.email,
            "subscribed_at": datetime.now().isoformat(),
            "status": "active"
        }
        
        # TODO: Save to database
        # TODO: Send welcome email
        
        return {
            "success": True,
            "message": "Thank you for subscribing to our newsletter!"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to subscribe to newsletter")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)