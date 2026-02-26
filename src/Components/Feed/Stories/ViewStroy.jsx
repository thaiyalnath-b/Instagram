import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { story as mockStory } from "../../Data/story";
import './ViewStory.css'

function ViewStory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = mockStory.findIndex((s) => String(s.id) === id);
    if (i === -1) navigate("/");
    else setIndex(i);
  }, [id, navigate]);

  const prev = () => {
    if (index === 0) navigate("/");
    else navigate(`/story/${mockStory[index - 1].id}`);
  };

  const next = () => {
    if (index === mockStory.length - 1) navigate("/");
    else navigate(`/story/${mockStory[index + 1].id}`);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const story = mockStory[index];
  if (!story) return null;

  return (
    <div className="story-viewer">
      <div className="nav-zone left" onClick={prev}></div>

      <div className="story-content">
        <div className="story-header">
          <img
            src={story.user.profile_pic}
            alt={story.user.username}
            className="viewer-avatar"
          />
          <span>{story.user.username}</span>
        </div>

        <img src={story.image} alt="" className="viewer-image" />
      </div>

      <div className="nav-zone right" onClick={next}></div>
    </div>
  );
}

export default ViewStory;