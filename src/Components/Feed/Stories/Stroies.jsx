import React, { useEffect, useState } from 'react'
import { useNavigate} from "react-router-dom"


function Stroies() {

    const [stories, setStories] = useState([]);

    const navigate = useNavigate();

    let tot = 0;

    useEffect(() => {
        fetch("http://localhost:3000/story")
            .then(data => data.json())
            .then(data => setStories(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='story d-flex justify-content-center st'>
            <div className='d-none'>{tot = stories.length}</div>
            {stories.length > 0 ? (
                stories.map((story) => (
                    <div key={story.id} className='mx-2' onClick={()=> {navigate(`/story/${story.id}/${tot}`)}}>
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
    )
}

export default Stroies