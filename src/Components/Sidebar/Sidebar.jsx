import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

    const navigate = useNavigate();
    return (
        <div className='position-fixed'>
            <div className='d-flex flex-column gp'>
                <a href="#" className='p-3'>
                    <p className='insta'><i className="bi bi-instagram"></i></p>
                    <img className='logo-text' src="/assets/Instagram_text.png" alt="" />
                </a>
                
                <div className='mt-2 ho sp'><i className="bi bi-house-door-fill"></i><span>Home</span></div>
                <div className='ho' onClick={() => { navigate('/search') }}><i className="bi bi-search"></i><span>Search</span></div>
                <div className='ho' onClick={() => { navigate('/explore') }}><i className="bi bi-compass"></i><span>Explore</span></div>
                <div className='ho' onClick={() => { navigate('/reels') }}><i className="bi bi-play-btn"></i><span>Reels</span></div>
                <div className='ho' onClick={() => { navigate('/messages') }}><i className="bi bi-chat-dots"></i><span>Messages</span></div>
                <div className='ho' onClick={() => { navigate('/notifications') }}><i className="bi bi-heart"></i><span>Notifications</span></div>
                <div className='ho' onClick={() => { navigate('/create') }}><i className="bi bi-plus-square"></i><span>Create</span></div>
                <div onClick={() => { navigate('/profile') }} className='ho'><i className="bi bi-person-circle"></i><span>Profile</span></div>
            </div>
            <div className='position-fixed bottom-0 d-flex flex-column gp gb'>
                <div className='ho' onClick={() => { navigate('/more') }}><i className="bi bi-list"></i><span>More</span></div>
                <div className='ho' onClick={() => { navigate('/meta') }}><i className="bi bi-grid"></i><span>Also from meta</span></div>
            </div>
        </div>
    )
}

export default Sidebar