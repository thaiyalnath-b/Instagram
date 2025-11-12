import React from 'react'
import "./Create.css"

function Create() {

  return (
    <div className='create-card'>
      <div className='create-item'>
        <span>Post</span>
        <i className="bi bi-image"></i>
      </div>
      <div className='create-item'>
        <span>AI</span>
        <i className="bi bi-stars"></i>
      </div>
    </div>
  )
}

export default Create