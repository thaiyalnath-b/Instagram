import React, { useState } from "react";
import "./Messages.css";
import chats from "../../Data/chats";
import Chat from "./Chat";

function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="dm-container">
      <div className={`dm-sidebar ${selectedChat ? "hide-mobile" : ""}`}>
        <div className="dm-header">
          <h5>itz_thaiyal_18</h5>
          <i className="bi bi-pencil-square"></i>
        </div>

        <input type="text" placeholder="Search" className="dm-search" />

        <div className="dm-list">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`dm-item ${
                selectedChat?.id === chat.id ? "active" : ""
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <img src={chat.profile_pic} alt="" />
              <div>
                <h6>{chat.username}</h6>
                <p>{chat.last_message}</p>
              </div>
              <span>{chat.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dm-chat">
        {selectedChat ? (
          <Chat chat={selectedChat} onBack={() => setSelectedChat(null)} />
        ) : (
          <div className="dm-empty">
            <i className="bi bi-send"></i>
            <h4>Your messages</h4>
            <p>Send a message to start a chat.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;