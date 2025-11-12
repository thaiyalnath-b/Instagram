import React from 'react'
import "./Meta.css"

function Metas() {
  return (
    <div className='meta-card'>

      <div className='meta-item'>
        <i className="bi bi-stars"></i>
        <span>Meta AI</span>
      </div>
      <div className='meta-item'>
        <i className="bi bi-cpu"></i>
        <span>AI Studio</span>
      </div>
      <div className='meta-item'>
        <i className="bi bi-chat-dots"></i>
        <span>Threads</span>
      </div>
      <div className='meta-item'>
        <i className="bi bi-whatsapp"></i>
        <span>WhatsApp</span>
      </div>
    </div>
  )
}

export default Metas