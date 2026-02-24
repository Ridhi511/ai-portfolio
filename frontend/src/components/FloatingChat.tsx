import React, { useState } from "react";
import Chat from "./Chat";
import "./FloatingChat.css";

const FloatingChat = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        className="chat-toggle-btn"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>AI Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-body">
            <Chat />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;