import React from "react";
import "./Meta.css";

function Metas({ onClose }) {
  return (
    <div className="meta-overlay" onClick={onClose}>
      <div className="meta-menu" onClick={(e) => e.stopPropagation()}>
        <div className="meta-item">
          <i className="bi bi-stars"></i>
          <span>Meta AI</span>
        </div>

        <div className="meta-item">
          <i className="bi bi-cpu"></i>
          <span>AI Studio</span>
        </div>

        <div className="meta-item">
          <i className="bi bi-chat-dots"></i>
          <span>Threads</span>
        </div>

        <div className="meta-item">
          <i className="bi bi-whatsapp"></i>
          <span>WhatsApp</span>
        </div>
      </div>
    </div>
  );
}

export default Metas;