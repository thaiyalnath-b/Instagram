import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

    const navigate = useNavigate();
    return (
        <div className='position-fixed'>
            <div className='d-flex flex-column gp'>
                <a href="#" className='p-3'>
                    <img className='logo-text' src="/assets/Instagram_text.png" alt="" />
                </a>
                
                <div className='mt-2 ho'><i className="bi bi-house-door-fill"></i>Home</div>
                <div className='ho' onClick={() => { navigate('/search') }}><i className="bi bi-search"></i>Search</div>
                <div className='ho' onClick={() => { navigate('/explore') }}><i className="bi bi-compass"></i>Explore</div>
                <div className='ho' onClick={() => { navigate('/reels') }}><i className="bi bi-play-btn"></i>Reels</div>
                <div className='ho' onClick={() => { navigate('/messages') }}><i className="bi bi-chat-dots"></i>Messages</div>
                <div className='ho' onClick={() => { navigate('/notifications') }}><i className="bi bi-heart"></i>Notifications</div>
                <div className='ho' onClick={() => { navigate('/create') }}><i className="bi bi-plus-square"></i>Create</div>
                <div onClick={() => { navigate('/profile') }} className='ho'><i className="bi bi-person-circle"></i>Profile</div>
            </div>
            <div className='position-fixed bottom-0 d-flex flex-column gp gb'>
                <div className='ho' onClick={() => { navigate('/more') }}><i className="bi bi-list"></i>More</div>
                <div className='ho' onClick={() => { navigate('/meta') }}><i className="bi bi-grid"></i>Also from meta</div>
            </div>
        </div>
    )
}

export default Sidebar