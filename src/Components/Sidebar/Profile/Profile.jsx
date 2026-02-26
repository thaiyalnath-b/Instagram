import React, { useState } from "react";
import { profile as mockProfile, followers as mockFollowers } from "../../Data/profile";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(mockProfile);
  const [followers, setFollowers] = useState(mockFollowers);
  const [editing, setEditing] = useState(false);

  function handleChange(e) {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function handleUpdate() {
    setEditing(false);
  }

  function handleUnfollow(id) {
    setFollowers(followers.filter((f) => f.id !== id));
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <img src={profile.profile_pic} alt="" className="profile-avatar" />

        <div className="profile-info">
          <div className="profile-top">
            {editing ? (
              <input
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <h2>{profile.username}</h2>
            )}

            <button className="edit-btn" onClick={() => setEditing(!editing)}>
              {editing ? "Cancel" : "Edit profile"}
            </button>

            {editing && (
              <button className="save-btn" onClick={handleUpdate}>
                Save
              </button>
            )}
          </div>

          <div className="profile-stats">
            <span><strong>{profile.posts}</strong> posts</span>
            <span><strong>{followers.length}</strong> followers</span>
            <span><strong>{profile.following}</strong> following</span>
          </div>

          <div className="profile-bio">
            {editing ? (
              <input
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <p>{profile.bio}</p>
            )}
          </div>
        </div>
      </div>

      <div className="followers-section">
        <h3>Followers</h3>

        {followers.map((follower) => (
          <div key={follower.id} className="follower-item">
            <span>{follower.username}</span>
            <button onClick={() => handleUnfollow(follower.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;