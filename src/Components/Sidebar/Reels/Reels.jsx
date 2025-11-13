import React, { useState, useEffect } from "react";
import { reelsData } from "../../Data/reels";
import "./Reels.css";

function Reels() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    setReels(reelsData); 
  }, []);

  return (
    <div className="rel">
      {reels.length > 0 ? (
        reels.map((reel) => (
          <div key={reel.id} className="rel_item">
            <video
              src={reel.reel_video}
              loop
              muted
              autoPlay
              playsInline
              className="rel_vid"
            ></video>

            <div className="reel_overlay">
              <div className="reel_info">
                <h4>@{reel.username}</h4>
                <p>{reel.caption}</p>
                <small>{reel.music}</small>
              </div>

              <div className="reel_actions">
                <span>
                  <i className="bi bi-heart-fill"></i> {reel.likes}
                </span>
                <span>
                  <i className="bi bi-chat-fill"></i> {reel.comments.length}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading Reels...</p>
      )}
    </div>
  );
}

export default Reels;
