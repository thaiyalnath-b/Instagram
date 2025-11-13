import React, { useState, useEffect } from "react";
import { exploreData } from "../../Data/explore";
import "./Explore.css"

function Explore() {
  const [explorePosts, setExplorePosts] = useState([]);

  useEffect(() => {
    setExplorePosts(exploreData);
  }, []);

  return (
    <div className="expr">
      {explorePosts.map((post) => (
        <div key={post.id} className="exp_item">
          <img src={post.post_image} alt={post.username} />

          <div className="overlay">
            <span>
              <i className="bi bi-heart-fill me-1"></i>
              {post.likes}
            </span>
            <span>
              <i className="bi bi-chat-fill me-1"></i>
              {post.comments.length}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Explore;
