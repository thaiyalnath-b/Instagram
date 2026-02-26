import React, { useState } from "react";
import { posts as mockPosts } from "../../Data/Posts";
import { Heart, MessageCircle, Send } from "lucide-react";
import './Posts.css'

function Posts() {
  const [posts, setPosts] = useState(
    mockPosts.map((post) => ({
      ...post,
      liked: false,
    }))
  );

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="feed">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <img
              className="post-avatar"
              src={post.user.profile_pic}
              alt={post.user.username}
            />
            <span className="post-username">{post.user.username}</span>
          </div>

          <div
            className="post-image-wrapper"
            onDoubleClick={() => handleLike(post.id)}
          >
            <img className="post-image" src={post.image} alt="post" />
          </div>

          <div className="post-actions">
            <Heart
              className={`icon ${post.liked ? "liked" : ""}`}
              onClick={() => handleLike(post.id)}
            />
            <MessageCircle className="icon" />
            <Send className="icon" />
          </div>

          <div className="post-likes">
            {post.likes} likes
          </div>

          <div className="post-caption">
            <span className="post-username">
              {post.user.username}
            </span>{" "}
            {post.caption}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;