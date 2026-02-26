import React, { useState } from "react";
import "./Suggestion.css";
import {
  profile as mockProfile,
  suggestions as mockSuggestions,
} from "../Data/Suggestion";

function Suggestions() {
  const [profile] = useState(mockProfile);
  const [suggestions] = useState(mockSuggestions);
  const [followed, setFollowed] = useState({});

  const handleFollow = (id) => {
    setFollowed((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="suggest">
      <div className="suggest-profile">
        <img
          src={profile.profile_pic}
          alt={profile.username}
          className="profile-pic"
        />
        <div className="profile-info">
          <span className="username">{profile.username}</span>
        </div>
        <span className="switch-text">Switch</span>
      </div>

      <div className="suggest-head">
        <span>Suggested for you</span>
        <span className="see-all">See All</span>
      </div>

      {suggestions.map((user) => (
        <div key={user.id} className="suggest-item">
          <div className="user-info">
            <img
              src={user.profile_pic}
              alt={user.username}
              className="user-pic"
            />
            <span className="user-name">{user.username}</span>
          </div>

          <button
            className={`follow-btn ${
              followed[user.id] ? "unfollow" : "follow"
            }`}
            onClick={() => handleFollow(user.id)}
          >
            {followed[user.id] ? "Following" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;