// basic react stuff
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

// router stuff
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages included on the website
import Home from './pages/Home.jsx';
import MagicItemList from './pages/MagicItemList.jsx';

// initialize the router
const router = createBrowserRouter([
  {
    path: '/dndatabase/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/dndatabase/MagicItemList',
        element: <MagicItemList />
      }
    ]
  }
]);

// renders the current HTML document with the appropriate ReactDOM element
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />  
);