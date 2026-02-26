import React from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";

function Create() {
  const navigate = useNavigate();

  const close = () => navigate(-1);

  return (
    <div className="create-overlay" onClick={close}>
      <div className="create-menu" onClick={(e) => e.stopPropagation()}>
        <div className="create-item">
          <span>Post</span>
          <i className="bi bi-image"></i>
        </div>

        <div className="create-item">
          <span>AI</span>
          <i className="bi bi-stars"></i>
        </div>
      </div>
    </div>
  );
}

export default Create;