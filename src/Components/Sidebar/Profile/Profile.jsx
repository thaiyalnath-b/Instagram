import React, { useState } from "react";
import { profile as mockProfile, followers as mockFollowers } from "../../Data/profile";

function Profile() {
  const [profile, setProfile] = useState(mockProfile);
  const [followers, setFollowers] = useState(mockFollowers);

  function HandleOnChange(e) {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function HandleUpdate() {
    alert("Profile Updated Successfully");
    console.log("Updated Profile:", profile);
  }

  function HandleUnfollow(id) {
    const updatedFollowers = followers.filter((f) => f.id !== id);
    setFollowers(updatedFollowers);
    alert("Unfollowed");
  }

  return (
    <div className="m-5">
      {profile ? (
        <div>
          <img
            src={profile.profile_pic}
            alt="Profile"
            className="profile rounded-circle"
            style={{ width: "100px", height: "100px" }}
          />
          <h5 className="mt-2">{profile.username}</h5>

          <input
            type="text"
            value={profile.username}
            name="username"
            className="form-control my-4"
            onChange={HandleOnChange}
          />

          <input
            type="text"
            name="profile_pic"
            value={profile.profile_pic}
            className="form-control"
            onChange={HandleOnChange}
          />

          <button className="btn btn-primary" onClick={HandleUpdate}>
            Update
          </button>
        </div>
      ) : (
        <div>Loading Profile...</div>
      )}

      <h6>Followers</h6>
      {followers.length > 0 ? (
        followers.map((follower) => (
          <div key={follower.id} className="d-flex my-2 align-items-center">
            <span>{follower.username}</span>
            <button
              className="btn btn-secondary ms-auto"
              onClick={() => HandleUnfollow(follower.id)}
            >
              Unfollow
            </button>
          </div>
        ))
      ) : (
        <div>No Followers Found</div>
      )}
    </div>
  );
}

export default Profile;
