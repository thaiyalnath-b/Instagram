import React from "react";
import "./Notifications.css";
import { notifications } from "../../Data/Notification";

function Notifications() {
  return (
    <div className="notifications-wrapper">
      <div className="notifications-list">
        <h3>Notifications</h3>

        {notifications.length === 0 ? (
          <p className="no-notifications">No new notifications</p>
        ) : (
          notifications.map((n) => (
            <div key={n.id} className="notification-item">
              <img src={n.profile_pic} alt="" />

              <div className="notification-info">
                <span className="username">{n.username}</span>
                <span>{n.message}</span>
                <div className="time">{n.time}</div>
              </div>

              {n.type === "follow" && (
                <button className="follow-btn">Follow</button>
              )}

              {n.type === "like" && (
                <i className="bi bi-heart-fill like-icon"></i>
              )}

              {n.type === "comment" && (
                <i className="bi bi-chat-dots comment-icon"></i>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Notifications;