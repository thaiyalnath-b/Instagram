import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { story as mockStory } from '../../Data/story';

function Stories() {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();
  let tot = 0;

  useEffect(() => {
    setStories(mockStory);
  }, []);

  return (
    <div className='story d-flex justify-content-center st'>
      <div className='d-none'>{tot = stories.length}</div>
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} className='mx-2' onClick={() => { navigate(`/story/${story.id}/${tot}`) }}>
            <div className='gradient_border'>
              <img src={story.user.profile_pic} alt="dp" className='story_dp rounded-circle' />
            </div>
            <p className='text-truncate mx-1' style={{ width: "75px" }}>{story.user.username}</p>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Stories;
