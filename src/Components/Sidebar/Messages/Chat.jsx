import React, {useState} from 'react'
import "./Chat.css"

function Chat({ chat }) {
    const [messages, setMessages] = useState(chat.messages);
    const [newMsg, setNewMsg] = useState("");

    const handleSend = () => {
        if (!newMsg.trim()) return;
        const msg = { from: "me", text: newMsg, time: "Now" };
        setMessages([...messages, msg]);
        setNewMsg("");
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <img src={chat.profile_pic} alt={chat.username} className="header-avatar" />
                <h5>{chat.username}</h5>
            </div>

            <div className="chat-body">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`message ${msg.from === "me" ? "sent" : "received"}`}
                    >
                        <p>{msg.text}</p>
                        <span>{msg.time}</span>
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Message..."
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                />
                <i className="bi bi-send-fill" onClick={handleSend}></i>
            </div>
        </div>
    );
}

export default Chat