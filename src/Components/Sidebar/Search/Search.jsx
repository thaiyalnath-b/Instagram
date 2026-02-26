import React from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search() {
  const navigate = useNavigate();

  return (
    <div className="search-panel">
      <div className="search-header">
        <h2>Search</h2>
        <button className="close-btn" onClick={() => navigate("/")}>
          ×
        </button>
      </div>

      <div className="search-input-wrap">
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="search-body">
        <h4>Recent</h4>
        <div className="empty">No recent searches.</div>
      </div>
    </div>
  );
}

export default Search;