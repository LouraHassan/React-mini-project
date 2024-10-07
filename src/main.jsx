import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import TweetPage from './pages/TweetPage.jsx';
import NewTweet from './pages/NewTweet.jsx';
const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
    {
      path: "/signup",
      element: <Signup/>,
      },
      {
        path: "home/:userId",
        element: <App />,
  },
  {
    path: "home/:userId/:tweetId",
    element: <TweetPage />,
  },
  {
    path: "tweet/:userId/",
    element: <NewTweet />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Routers}></RouterProvider>

)
