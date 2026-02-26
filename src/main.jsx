import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Feed from "./Components/Feed/Feed.jsx";
import ViewStory from "./Components/Feed/Stories/ViewStroy.jsx";
import Profile from "./Components/Sidebar/Profile/Profile.jsx";
import Search from "./Components/Sidebar/Search/Search.jsx";
import Explore from "./Components/Sidebar/Explore/Explore.jsx";
import Reels from "./Components/Sidebar/Reels/Reels.jsx";
import Messages from "./Components/Sidebar/Messages/Messages.jsx";
import Notifications from "./Components/Sidebar/Notifications/Notifications.jsx";
import Create from "./Components/Sidebar/Create/Create.jsx";
import More from "./Components/Sidebar/More/More.jsx";
import Metas from "./Components/Sidebar/Meta/Metas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Feed /> },
       { path: "create", element: <Feed /> },
      { path: "story/:id", element: <ViewStory /> },
      { path: "profile", element: <Profile /> },
      { path: "search", element: <Search /> },
      { path: "explore", element: <Explore /> },
      { path: "reels", element: <Reels /> },
      { path: "messages", element: <Messages /> },
      { path: "notifications", element: <Notifications /> },
      { path: "more", element: <Feed /> },
      { path: "meta", element: <Feed /> }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);