import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Components/Sidebar/Sidebar";
import Suggestions from "./Components/Suggestion/Suggestions";
import InstagramSplash from "./Components/InstagramSplash/InstagramSplash";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <InstagramSplash />;

  return (
    <div className="d-flex vh-100 full">
      <div className="w-15 pt-3">
        <Sidebar />
      </div>

      <div className="w-55">
        <Outlet />
      </div>

      <div className="w-30 mt-5">
        <Suggestions />
      </div>
    </div>
  );
}

export default App;