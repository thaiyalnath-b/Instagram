import React from 'react'
import Stroies from "./Stories/Stroies.jsx"
import Posts from './Posts/Posts.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'


function Feed() {
  return (
    <div>
      <div className='head'><Header /></div>
      <div><Stroies /></div>
      <div><Posts /></div>
      <div className='foo'><Footer /></div>
    </div>
  )
}

export default Feed