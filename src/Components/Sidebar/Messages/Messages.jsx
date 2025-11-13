import React, { useEffect, useState } from 'react'
import "./Messages.css"
import chats from '../../Data/chats';
import Chat from './Chat';

function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="messages-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h5>itz_thaiyal_18</h5>
          <i className="bi bi-pencil-square"></i>
        </div>

        <input type="text" placeholder="Search" className="search-bar" />

        <h6 className="mt-3">Messages</h6>

        <div className="chat-list">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${selectedChat?.id === chat.id ? "active" : ""
                }`}
              onClick={() => setSelectedChat(chat)}
            >
              <img
                src={chat.profile_pic}
                alt={chat.username}
                className="chat-avatar"
              />
              <div className="chat-info">
                <h5>{chat.username}</h5>
                <p>{chat.last_message}</p>
              </div>
              <span className="chat-time">{chat.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-section">
        {selectedChat ? (
          <Chat chat={selectedChat} />
        ) : (
          <div className="no-chat">
            <i className="bi bi-send fs-1"></i>
            <h4>Your messages</h4>
            <p>Send a message to start a chat.</p>
            <button className="btn btn-primary">Send Message</button>
          </div>
        )}
      </div>
    </div>
  );
}


export default Messages