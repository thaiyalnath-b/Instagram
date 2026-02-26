import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { story as mockStory } from "../../Data/story";
import "./Stories.css";

function Stories() {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setStories(mockStory);
  }, []);

  return (
    <div className="stories-wrapper">
      <div className="stories">
        {stories.map((story) => (
          <div
            key={story.id}
            className="story-item"
            onClick={() => navigate(`/story/${story.id}`)}
          >
            <div className="story-ring">
              <img
                src={story.user.profile_pic}
                alt={story.user.username}
                className="story-avatar"
              />
            </div>
            <span className="story-username">
              {story.user.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;