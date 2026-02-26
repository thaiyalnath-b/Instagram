import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { icon: "bi-house-door", label: "Home", path: "/" },
    { icon: "bi-search", label: "Search", path: "/search" },
    { icon: "bi-compass", label: "Explore", path: "/explore" },
    { icon: "bi-play-btn", label: "Reels", path: "/reels" },
    { icon: "bi-chat-dots", label: "Messages", path: "/messages" },
    { icon: "bi-heart", label: "Notifications", path: "/notifications" },
    { icon: "bi-plus-square", label: "Create", path: "/create" },
    { icon: "bi-person-circle", label: "Profile", path: "/profile" }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="logo mx-auto" onClick={() => navigate("/")}>
          <i className="bi bi-instagram logo-icon"></i>
          <img
            src="/assets/Instagram_text.png"
            alt=""
            className="logo-text"
          />
        </div>

        {menu.map((item) => (
          <div
            key={item.path}
            className={`sidebar-item ${location.pathname === item.path ? "active" : ""
              }`}
            onClick={() => navigate(item.path)}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-bottom">
        <div
          className="sidebar-item"
          onClick={() => navigate("/more")}
        >
          <i className="bi bi-list"></i>
          <span>More</span>
        </div>

        <div
          className="sidebar-item"
          onClick={() => navigate("/meta")}
        >
          <i className="bi bi-grid"></i>
          <span>Also from Meta</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;