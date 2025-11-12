import React from 'react'
import "./Search.css"

function Search() {
  return (
    <div>
      <div className="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header ps-4">
          <h3 className="offcanvas-title" id="offcanvasLabel">Search</h3>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className='sch'>
          <input type="text" placeholder='Search' className='ip' />
        </div>
        <div className="offcanvas-body ps-4">
          <h5>Recent</h5>
          <h6>No recent searches.</h6>
        </div>
      </div>
    </div>
  )
}

export default Search