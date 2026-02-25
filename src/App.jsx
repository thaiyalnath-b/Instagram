import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Suggestions from './Components/Suggestion/Suggestions';
import InstagramSplash from './Components/InstagramSplash/InstagramSplash';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // splash duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <InstagramSplash />
      ) : (
        <div className='d-flex vh-100 full'>
          <div className='w-15 pt-3'><Sidebar /></div>
          <div className='w-55'><Feed /></div>
          <div className='w-30 mt-5'><Suggestions /></div>
        </div>
      )}
    </>
  );
}

export default App;