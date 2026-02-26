import React, { useEffect, useState } from "react";
import { exploreData } from "../../Data/explore";
import "./Explore.css";

function Explore() {
  const [explorePosts, setExplorePosts] = useState([]);

  useEffect(() => {
    setExplorePosts(exploreData);
  }, []);

  return (
    <div className="explore-wrapper">
      <div className="explore-grid">
        {explorePosts.map((post) => (
          <div key={post.id} className="explore-item">
            <img src={post.post_image} alt="" />

            <div className="explore-overlay">
              <span>
                <i className="bi bi-heart-fill"></i>
                {post.likes}
              </span>
              <span>
                <i className="bi bi-chat-fill"></i>
                {post.comments.length}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;