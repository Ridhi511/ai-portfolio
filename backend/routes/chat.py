from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models.chat_model import Chat
from services.openrouter_service import ask_ai

router = APIRouter(prefix="")   # important

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/chat")
def chat(message: str, db: Session = Depends(get_db)):

    with open("resume.txt", "r", encoding="utf-8") as file:
        resume_text = file.read()

    ai_response = ask_ai(message, resume_text)

    chat_entry = Chat(user_message=message, ai_response=ai_response)
    db.add(chat_entry)
    db.commit()

    return {"response": ai_response}