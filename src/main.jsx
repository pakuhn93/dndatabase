// basic react stuff
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

// router stuff
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages included on the website
import Home from './pages/Home.jsx';
import MagicItemList from './pages/MagicItemList.jsx';
import HP_Calc from './pages/HP_Calc.jsx';
import InitiativeTracker from './pages/initiativeTracker.jsx';

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
      },
      {
        path: '/dndatabase/HP_Calc',
        element: <HP_Calc />
      },
      {
        path: '/dndatabase/initiativeTracker',
        element: <InitiativeTracker />
      }
    ]
  }
]);

// renders the current HTML document with the appropriate ReactDOM element
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />  
);