
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Meta, RouterProvider} from "react-router-dom";
import ViewStroy from './Components/Feed/Stories/ViewStroy.jsx';
import Profile from './Components/Sidebar/Profile/Profile.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Search from './Components/Sidebar/Search/Search.jsx';
import Explore from './Components/Sidebar/Explore/Explore.jsx';
import Reels from './Components/Sidebar/Reels/Reels.jsx';
import Messages from './Components/Sidebar/Messages/Messages.jsx';
import Notifications from './Components/Sidebar/Notifications/Notifications.jsx';
import Create from './Components/Sidebar/Create/Create.jsx';
import More from './Components/Sidebar/More/More.jsx';
import Metas from './Components/Sidebar/Meta/Metas.jsx';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <App />
    },
    {
      path:"/",
      element: <Sidebar />
    },
    {
      path:"/story/:id/:tot",
      element: <ViewStroy />
    },
    {
      path:"/profile",
      element: <Profile />
    },
    {
      path:"/search",
      element: <Search />
    },
    {
      path:"/explore",
      element: <Explore />
    },
    {
      path:"/reels",
      element: <Reels />
    }, 
    {
      path:"/messages",
      element: <Messages />
    },
    {
      path: "/notifications",
      element: <Notifications />
    },
    {
      path: "/create",
      element: <Create />
    },
    {
      path: "/more",
      element: <More />
    },
    {
      path: "/meta",
      element: <Metas />
    }
  ]
)

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
