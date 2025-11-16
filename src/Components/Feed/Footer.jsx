import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {

    const navigate = useNavigate();
    return (
        <div className='bg-dark text-light ft w-100 pt-2'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='ho'><i className="bi bi-house-door-fill"></i><span>Home</span></div>
                <div className='ho' onClick={() => { navigate('/search') }}><i className="bi bi-search"></i><span>Search</span></div>
                <div className='ho' onClick={() => { navigate('/create') }}><i className="bi bi-plus-square"></i><span>Create</span></div>
                <div className='ho' onClick={() => { navigate('/reels') }}><i className="bi bi-play-btn"></i><span>Reels</span></div>
                <div className='ho pe-4' onClick={() => { navigate('/profile') }}><i className="bi bi-person-circle"></i><span>Profile</span></div>
            </div>
        </div>
    )
}

export default Footer