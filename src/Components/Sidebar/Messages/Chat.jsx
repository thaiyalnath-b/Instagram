import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";

function Chat({ chat, onBack }) {
  const [messages, setMessages] = useState(chat.messages);
  const [newMsg, setNewMsg] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { from: "me", text: newMsg, time: "Now" }]);
    setNewMsg("");
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <img src={chat.profile_pic} alt="" />
        <h5>{chat.username}</h5>
      </div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${
              msg.from === "me" ? "sent" : "received"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className="chat-input">
        <input
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Message..."
        />
        <i className="bi bi-send-fill" onClick={handleSend}></i>
      </div>
    </div>
  );
}

export default Chat;