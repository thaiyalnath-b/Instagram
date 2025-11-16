import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Suggestions from './Components/Suggestion/Suggestions';


function App() {
  return (

    <div>
      <div className='d-flex vh-100 full'>
        <div className='w-15 pt-3'><Sidebar /></div>
        <div className='w-55'><Feed /></div>
        <div className='w-30 mt-5'><Suggestions /></div>
      </div>
    </div>

  )
}

// w-25 w-50 2-75 w-100

export default App