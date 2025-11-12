import React from 'react'
import "./More.css"

function More() {
  return (
    <div className='more-card'>
      <div className='more-item'>
        <i className="bi bi-gear"></i>
        <span>Settings</span>
      </div>

      <div className='more-item'>
        <i className="bi bi-clock-history"></i>
        <span>Your Activity</span>
      </div>

      <div className='more-item'>
        <i className="bi bi-bookmark"></i>
        <span>Saved</span>
      </div>

      <div className='more-item'>
        <i className="bi bi-brightness-high"></i>
        <span>Switch Appearance</span>
      </div>

      <div className='more-item'>
        <i className="bi bi-flag"></i>
        <span>Report a Problem</span>
      </div>
    </div>
  )
}

export default More