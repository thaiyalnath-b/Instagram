import React, { useEffect, useRef, useState } from "react";
import { reelsData } from "../../Data/reels";
import "./Reels.css";

function Reels() {
  const [reels, setReels] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setReels(reelsData);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) video.play();
          else video.pause();
        });
      },
      { threshold: 0.75 }
    );

    videoRefs.current.forEach((video) => video && observer.observe(video));

    return () => observer.disconnect();
  }, [reels]);

  return (
    <div className="reels-container">
      {reels.map((reel, index) => (
        <div key={reel.id} className="reel">
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={reel.reel_video}
            loop
            muted
            playsInline
            className="reel-video"
          />

          <div className="reel-overlay">
            <div className="reel-info">
              <h4>@{reel.username}</h4>
              <p>{reel.caption}</p>
              <small>{reel.music}</small>
            </div>

            <div className="reel-actions">
              <span><i className="bi bi-heart-fill"></i>{reel.likes}</span>
              <span><i className="bi bi-chat-fill"></i>{reel.comments.length}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reels;