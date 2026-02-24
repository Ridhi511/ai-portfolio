import React, { useState } from "react";
import "./Chat.css";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chat = () => {
    const [loading, setLoading] = useState(false);   // ✅ ADD THIS
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState<Message[]>([]);

        const messagesEndRef = useRef<HTMLDivElement | null>(null);
        useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, [chat]);


  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = { sender: "user", text: message };
    setChat([...chat, userMessage]);
    setMessage("");

    try {
        setLoading(true);   // ✅ START animation

      const response = await fetch(
  `${process.env.REACT_APP_API_URL}/chat?message=${message}`,
  { method: "POST" }
);

      const data = await response.json();

      const botMessage: Message = {
        sender: "bot",
        text: data.response,
      };

      setChat((prev) => [...prev, botMessage]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "Error connecting to backend." },
      ]);
    }finally {
    setLoading(false);   // ✅ STOP animation
  }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "user" ? "user" : "bot"
            }`}
          >
            {msg.sender === "bot" ? (
            <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
            <p>{msg.text}</p>
            )}
          </div>
        ))}
        {loading && (
        <div className="message bot typing">
            <div className="dots">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="send-btn">
  ➤
</button>
      </div>
    </div>
  );
};

export default Chat;