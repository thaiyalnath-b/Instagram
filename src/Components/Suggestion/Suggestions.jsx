import React, { useState } from 'react'
import "./Suggestion.css"
import { profile as mockProfile, suggestions as mockSuggestions } from '../Data/Suggestion';


function Suggestions() {
  const [profile] = useState(mockProfile);
  const [suggestions] = useState(mockSuggestions);
  const [followed, setFollowed] = useState({});

  const handleFollow = (id, username) => {
    setFollowed((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className='suggest'>
      <div className='suggest-pro'>
        <img src={profile.profile_pic} alt="Profile" className='profile-pic' />
        <div className='profile-info'>
          <h6>{profile.username}</h6>
        </div>
        <span className='switch-text'>Switch</span>
      </div>

      <div className='suggest-head'>
        <p>Suggested for you</p>
        <span>See All</span>
      </div>

      {suggestions.map((user) => (
        <div key={user.id} className='suggest-item'>
          <div className='user-info'>
            <img src={user.profile_pic} alt={user.username} className='user-pic' />
            <div className='user-details'>
              <h6>{user.username}</h6>
            </div>
          </div>
          <button className={`follow-btn ${followed[user.id] ? "unfollow" : "follow"
            }`} onClick={() => handleFollow(user.id)}>
            {followed[user.id] ? "Unfollow" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions