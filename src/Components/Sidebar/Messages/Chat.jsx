import React, { useState } from 'react'
import "./Chat.css"

function Chat({chat}) {
  const [messages, setMessages] = useState(chat.messages);
  const [newMsg, setNewMsg] = useState('');

  const handleSend = ()=> {
    if (newMsg.trim() === "") return;
    const newMessage = { from: "me", text: newMsg, time: "Now"};
    setMessages([...messages, newMessage]);
    setNewMsg("");
  };

  return (
    <div className='chat'>
      <div className='chat-header'>
        <img src={chat.profile_pic} alt={chat.username} className='profile-pic' />
        <h4>{chat.username}</h4>
      </div>

      <div className='chat-messages'>
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.from === "me" ? "sent" : "received"}`}>
            <p>{msg.text}</p>
            <span>{msg.time}</span>
          </div>
        ))}
      </div>

      <div className='chat-input'>
        <input type="text" placeholder='Message...' value={newMsg} onChange={(e) => setNewMsg(e.target.value)} />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Chat