import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Messages.css"
import Chat from './Chat';

function Messages() {

  const [chats, SetChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/chats")
      .then(res => {
        SetChats(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching chats:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className='loading'>Loading chats...</div>

  return (
    <div className='msg'>
      <div className='chat_list'>
        <h5>itz_thaiyal_18</h5>
        <input type="text" placeholder='Search'  className='sch'/>
        <h5>Message</h5>
        {chats.map((chat) => (
          <div key={chat.id} className={`chat-item ${selectedChat?.id === chat.id ? "active" : ""}`} onClick={() => setSelectedChat(chat)}>
            <img src={chat.profile_pic} alt={chat.username} className='profile-pic' />
            <div className='chat-info'>
              <h4>{chat.username}</h4>
              <p>{chat.last_message}</p>
            </div>
            <span className='chat-time'>{chat.time}</span>
          </div>
        ))}
      </div>

      <div className='chat-section'>
        {selectedChat ? (
          <Chat chat={selectedChat} />
        ) : (
          <div className='cht'>
            <div className="no-chat">
              <h1><i class="bi bi-telegram"></i></h1>
              <h3>Your messages</h3>
              <p>Send a message to start a chat.</p>
              <button>Send message</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Messages