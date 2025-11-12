import React, { use, useEffect, useState } from 'react'
import "./Reels.css"

function Reels() {

  const [reelss, setReels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reels")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setReels(data);
        } else if (data.reels) {
          setReels(data.reels);
        } else {
          console.log("Unknown data structure:", data);
        }
      })
      .catch((err) => console.log("Error Loading data:", err))
  }, [])
  return (
    <div className='rel'>
      {reelss.length > 0 ? (
        reelss.map((reel) => (
          <div key={reel.id} className='rel_item'>
            <video src={reel.reel_video} loop muted autoPlay playsInline className='rel_vid'></video>
            <div className='reel_overlay'>
              <div className='reel_info'>
                <h4>@{reel.username}</h4>
                <p>{reel.caption}</p>
              </div>
              <div className='reel_actions'>
                <span><i class="bi bi-heart-fill"></i>{reel.likes}</span>
                <span><i class="bi bi-chat-fill"></i>{reel.comments.length}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading Reels...</p>
      )}
    </div>
  )
}

export default Reels