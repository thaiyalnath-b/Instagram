import React, { useEffect, useState } from 'react'
import "./Explore.css"

function Explore() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/explore")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else if (data.explore) {
          setPosts(data.explore);
        } else {
          console.log("Unknown data structure:", data);
        }
      })
      .catch((err) => console.log("Error loading data:", err));
  }, []);

  return (
    <div className='expr'>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className='exp_item'>
            <img src={post.post_image} alt={post.username} />
            <div className='overlay'>
              <span><i class="bi bi-heart-fill"></i>{post.likes}</span>
              <span><i class="bi bi-chat-fill"></i>{post.comments.length}</span>
            </div>
          </div>
        ))
      ) : (
        <p>Loading explore posts...</p>
      )}

    </div>
  )
}

export default Explore