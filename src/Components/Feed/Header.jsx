import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  return (<div className="mobile-header">
    <img
      src="/assets/Instagram_text.png"
      alt="Instagram"
      className="mobile-logo"
      onClick={() => navigate("/")}
    />
    <div className="mobile-actions">
      <i
        className="bi bi-heart"
        onClick={() => navigate("/notifications")}
      ></i>

      <i
        className="bi bi-chat-dots"
        onClick={() => navigate("/messages")}
      ></i>
    </div>
  </div>

  );
}

export default Header;
