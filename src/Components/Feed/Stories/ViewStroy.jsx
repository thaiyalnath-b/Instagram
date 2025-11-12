import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"


function ViewStroy() {

    const { id, tot } = useParams();

    const [story, setStory] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/story/${id}`)
            .then(data => data.json())
            .then(data => setStory(data))
            .catch(err => console.log(err))
    }, [id]);

    if (id > tot || id <= 0) {
        navigate('/');
    }

    return (
        <div>
            {story ? <div className='d-flex justify-content-center align-items-center vh-100'>
                <Link to={`http://localhost:5173/story/${Number(id) - 1}/${tot}`}><i className='bi bi-arrow-left-circle-fill'></i></Link>
                <div className='vst'>
                    <h4>{story.user.profile_pic}{story.user.username}</h4>
                    <img className='vs' src={story.image} alt="story" />
                </div>
                <Link to={`http://localhost:5173/story/${Number(id) + 1}/${tot}`}><i className='bi bi-arrow-right-circle-fill'></i></Link>
            </div> :
                <div>Loading</div>}
        </div>
    )
}

export default ViewStroy