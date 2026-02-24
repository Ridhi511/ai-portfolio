import requests
import os
from dotenv import load_dotenv

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

def ask_ai(user_message, resume_text):

    prompt = f"""
You are a professional AI portfolio assistant for Ridhi Garg.

Guidelines:
- Answer clearly and confidently.
- Only provide information relevant to the question.
- Keep answers concise unless detailed explanation is requested.
- Use structured formatting (headings + bullets) for skills, projects, or achievements.
- Avoid repeating contact information unless asked.
- Maintain a modern, polished, startup-style tone.

Resume:
{resume_text}

User Question:
{user_message}
"""

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "model": "openrouter/auto",
            "messages": [
                {"role": "user", "content": prompt}
            ],
        },
    )
    
    data = response.json()

    print("OPENROUTER RESPONSE:", data)   # 🔥 IMPORTANT DEBUG LINE

    if "choices" not in data:
        return f"Error from OpenRouter: {data}"

    return data["choices"][0]["message"]["content"]