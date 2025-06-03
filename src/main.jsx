import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './pages/ErrorPage.jsx';
import Homepage from './pages/Homepage.jsx';
import EventAdminPage from './pages/EventAdminPage.jsx';
import FacultiesPage from './pages/FacultiesPage.jsx';
import GroupsPage from './pages/GroupsPage.jsx';

const routes = [
  {
    index: true,
    path: '/',
    element: <Homepage />
  },
  {
    path: '/event-admin',
    element: <EventAdminPage />
  },
  {
    path: '/faculties',
    element: <FacultiesPage />
  },
  {
    path: '/groups',
    element: <GroupsPage />
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App routes={routes} />,
    children: routes,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
