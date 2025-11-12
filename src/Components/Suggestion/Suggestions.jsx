import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Suggestions() {

  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [followed, setFollowed] = useState({})

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then(data => data.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err))

    fetch("http://localhost:3000/suggestions")
      .then(data => data.json())
      .then(data => setSuggestions(data))
      .catch(err => console.log(err))

  }, [])

  const handleFollow = async (id, username) => {
    setFollowed(prev => ({
      ...prev,
      [id]: !prev[id]
    }));

    try {
      if(!followed[id]) {
        await axios.post('http://localhost:3000/followers', {id, username});
        console.log(`Followed ${username}`);
      }
      else {
        await axios.delete('http://localhost:3000/followers/${id}');
       console.log(`Unfollowed ${username}`) 
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  

  return (
    <div>
      <div className='suggestions w-75'>
        {profile ?
          <div className='d-flex align-items-center'>
            <img className='rounded-circle dp' src={profile.profile_pic} alt="profile_pic" />
            <h5 className='mt-2 ms-2'>{profile.username}</h5>
            <small className='text-primary ms-auto'>Switch</small>
          </div>
          : <p>Loading</p>}

        <div className='d-flex mt-4'>
          <p>Suggested for you</p>
          <b className='ms-auto'>See All</b>
        </div>

        {suggestions.length > 0 ? (
          <div>
            {suggestions.map((suggestion) => (
              <div key={suggestion.id}>
                <div className='d-flex align-items-center gap-1 mt-2'>
                  <img className='rounded-circle dp' src={suggestion.profile_pic} alt="profile_pic" />
                  <h5 className='mt-2 ms-2'>{suggestion.username}</h5>
                  <button className={`btn btn-sm mt-1 ms-auto ${followed[suggestion.id] ? 'btn-outline-danger' : 'btn-primary'}`}
                   onClick={() => { handleFollow(suggestion.id, suggestion.username) }}>
                  {followed[suggestion.id] ? 'Unfollow' : 'Follow'}</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default Suggestions