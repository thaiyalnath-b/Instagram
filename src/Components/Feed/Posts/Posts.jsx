import React from "react";
import { posts } from "../../Data/Posts";

function Posts() {
  return (
    <div className="d-flex justify-content-center pst">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className="my-3" key={post.id}>
              <div className="d-flex my-2 align-items-center">
                <img
                  className="rounded-circle dp"
                  src={post.user.profile_pic}
                  alt={post.user.username}
                />
                <h5 className="mt-2 ms-2">{post.user.username}</h5>
              </div>

              <img className="image" src={post.image} alt="post" />

              <div className="icons my-2">
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat mx-3"></i>
                <i className="bi bi-send"></i>
              </div>

              <div>
                <b>{post.likes} Likes</b>
              </div>

              <div>
                <p>{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts...</div>
      )}
    </div>
  );
}

export default Posts;
