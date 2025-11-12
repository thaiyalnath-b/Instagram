import React from 'react'
import Stroies from "./Stories/Stroies.jsx"
import Posts from './Posts/Posts.jsx'


function Feed() {
  return (
    <div>
      <div><Stroies /></div>
      <div><Posts /></div>
    </div>
  )
}

export default Feed