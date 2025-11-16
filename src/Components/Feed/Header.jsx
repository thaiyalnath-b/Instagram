import React from 'react'
import { useNavigate } from "react-router-dom"

function Header() {

    const navigate = useNavigate();

    return (
        <div className='position-fixed d-flex justify-content-between bg-dark text-light w-100'>
            <a href="#" className='p-3'>
                <img className='logo-text' src="/assets/ig.png" alt="" />
            </a>
            <div className='d-flex mt-3 me-3'>
                <div className='ho me-3' onClick={() => { navigate('/notifications') }}><i className="bi bi-heart"></i><span>Notifications</span></div>
                <div className='ho me-2' onClick={() => { navigate('/messages') }}><i className="bi bi-chat-dots"></i><span>Messages</span></div>
            </div>
        </div>
    )
}

export default Header