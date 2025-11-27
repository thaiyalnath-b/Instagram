import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import { story as mockStory } from '../../Data/story';

function ViewStory() {
  const { id, tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const found = mockStory.find(s => s.id === id);
    if (found) {
      setStory(found);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (id > tot || id <= 0) {
    navigate('/');
  }

  return (
    <div className='bc'>
      {story ? (
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <Link to={`/story/${Number(id) - 1}/${tot}`}><i className='bi bi-arrow-left-circle-fill l'></i></Link>
          <div className='vst'>
            <h4><img src={story.user.profile_pic} alt="" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "50%" }} /> {story.user.username}</h4>
            <img className='vs' src={story.image} alt="story" />
          </div>
          <Link to={`/story/${Number(id) + 1}/${tot}`}><i className='bi bi-arrow-right-circle-fill r'></i></Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ViewStory;
