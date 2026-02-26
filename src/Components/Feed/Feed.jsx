import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Stroies from "./Stories/Stroies.jsx";
import Posts from "./Posts/Posts.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Create from "../Sidebar/Create/Create.jsx";
import More from "../Sidebar/More/More.jsx";
import Metas from "../Sidebar/Meta/Metas.jsx";

function Feed() {
  const location = useLocation();
  const navigate = useNavigate();

  const showCreate = location.pathname === "/create";
  const showMore = location.pathname === "/more";
  const showMeta = location.pathname === "/meta";

  return (
    <>
      <div className="head">
        <Header />
      </div>

      <div>
        <Stroies />
      </div>

      <div>
        <Posts />
      </div>

      <div className="foo">
        <Footer />
      </div>

      {showCreate && (
        <Create onClose={() => navigate("/")} />
      )}
      {showMore && (
        <More onClose={() => navigate("/")} />
      )}
      {showMeta && (
  <Metas onClose={() => navigate("/")} />
)}
    </>
  );
}

export default Feed;