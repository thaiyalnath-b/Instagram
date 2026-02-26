import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { icon: "bi-house-door", path: "/" },
    { icon: "bi-search", path: "/search" },
    { icon: "bi-plus-square", path: "/create" },
    { icon: "bi-play-btn", path: "/reels" },
    { icon: "bi-person", path: "/profile" }
  ];

  return (
    <div className="mobile-footer">
      {menu.map((item) => (
        <i
          key={item.path}
          className={`bi ${item.icon} ${
            location.pathname === item.path ? "active" : ""
          }`}
          onClick={() => navigate(item.path)}
        ></i>
      ))}
    </div>
  );
}

export default Footer;